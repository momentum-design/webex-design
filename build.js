const path = require('path');
const fs = require('fs');
const { exec, execSync } = require('child_process');
const { threadId } = require('worker_threads');

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
            if(_repo.length>1) {
                this.config.baseHref = `https://${_repo[0]}.github.io/${_repo[1]}/`;
            }
        }
    }

    async ngBuild() {
        return new Promise((resolve, reject)=>{
            exec(`ng build momentum --output-path '${this.config.dist}' --configuration=production --base-href '${this.config.baseHref}'`, (err, stdout, stderr) => {
                //genereate 404
                const fileIndex = path.join(this.config.distPath,'index.html');
                const file404 = path.join(this.config.distPath,'404.html');
                if(fs.existsSync(fileIndex)){
                    fs.copyFileSync(fileIndex, file404);
                }
                //generate cname
                if(this.config.cname && this.config.genereateCNAME && this.config.genereateCNAME!=='false') {
                    fs.writeFileSync(path.join(this.config.distPath, 'CNAME'), this.config.cname);
                }
                resolve(1);
            });
        });
    }

    async build() {
        await this.ngBuild();
    }

}

new MyBuilder().build();