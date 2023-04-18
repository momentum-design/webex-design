const path = require('path');
const fs = require('fs');
const { exec, execSync } = require('child_process');
const { MarkdownBuild } = require('./tools/markdown-build'); 

const regArgs = /^([^\=]+)\=([^\=]+)$/;
const getArgs = () => {
    const _args = process.argv.slice(2);
    const ret = {};
    _args.forEach((str) => {
        const result = str.match(regArgs);
        if (result && typeof result.length === 'number' && result.length === 3) {
            ret[result[1]] = result[2];
        }
    });
    return ret;
};

const GenerateArticleIndex = async ()=> {
    let articleRoot = path.resolve(__dirname, './src/assets/articles');
    let articleMarkdownBuild = new MarkdownBuild(articleRoot);

    if(!fs.existsSync(articleRoot)) {
        fs.mkdirSync(articleRoot, {
            recursive: true
        });
    }
    let newsFolder = 'news';
    let newsData = await articleMarkdownBuild.getIndexJson(newsFolder);
    fs.writeFileSync(path.join(articleRoot, `${newsFolder}.json`), JSON.stringify(newsData, null ,'\t'));
};

class MyBuilder {

    args = getArgs(); // { repo, cname }
    
    //build
    constructor() {
        this.configSettings();
    }

    lowerCaseConfigProp(prop) {
        if(this.config && typeof this.config[prop] === 'string') {
            this.config[prop] = this.config[prop].toLowerCase();
        }
    }

    configSettings() {
        //read settings
        const args = getArgs();
        console.log(args);
        const distPath = path.resolve(__dirname, './dist');
        this.config = Object.assign({
            dist: './dist',
            distPath: distPath,
            baseHref: `file://${distPath}/`,
            genereateCNAME: true,
        }, args);

        this.lowerCaseConfigProp('cname');
        this.lowerCaseConfigProp('repo');

        //set baseurl
        if(this.config.cname) {    
            this.config.baseHref = `https://${this.config.cname}/`;
        } else if(this.config.repo) {
            const _repo  = this.config.repo.split('/'); 
            if(_repo.length>1 && _repo[0].toLowerCase() !== 'momentum-design') {
                this.config.baseHref = `https://${_repo[0]}.github.io/${_repo[1]}/`;
            } else {
                this.config.baseHref = `https://webex.design/`;
            }
        }
    }

    async ngBuild() {
        return new Promise((resolve, reject)=>{
            console.log(`ng build momentum --output-path '${this.config.dist}' --configuration=production --base-href '${this.config.baseHref}'`);
            exec(`ng build momentum --output-path '${this.config.dist}' --configuration=production --base-href '${this.config.baseHref}'`, (err, stdout, stderr) => {
                //genereate 404
                const fileIndex = path.join(this.config.distPath,'index.html');
                const file404 = path.join(this.config.distPath,'404.html');
                if(fs.existsSync(fileIndex)){
                    fs.copyFileSync(fileIndex, file404);
                }
                //generate cname
                if(this.config.baseHref === `https://webex.design/`) {
                    fs.writeFileSync(path.join(this.config.distPath, 'CNAME'), 'webex.design');
                }
                fs.writeFileSync(path.join(this.config.distPath, '_config.yml'), `include:
    - assets`);
                fs.writeFileSync(path.join(this.config.distPath, '.nojekyll'), ``);
                resolve(1);
            });
        });
    }

    async build() {
        console.log('start to build articles');
        await GenerateArticleIndex();
        console.log('start to build website');
        await this.ngBuild();
    }

}

new MyBuilder().build();