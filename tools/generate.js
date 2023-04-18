const {getArgs} = require('./args');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class NgGenerator {

    /*
    {
        type = '_nav' | '_component' | nav-name
        name = componentName
     }
    */

    async generate() {
        const args = getArgs();
        switch(args.type) {
            case '_nav':
                await this._generate(args.name, 'src/app', true);
                break;
            case '_component':
                await this._generate(args.name, 'src/components');
                break;
                // app
            default:
                if(args.subtype) {
                    await this._generate(args.name, `src/app/${args.type}/${args.subtype}`, true);
                } else {
                    await this._generate(args.name, `src/app/${args.type}`, true);
                }
                break;
        }
    }

    async _generate(name, root, needRoute) {
        const _root = path.resolve(__dirname, '../',root);
        if(!fs.existsSync(_root)){
            fs.mkdirSync(_root, {
                recursive:true
            });
        }
        const routeForModule = needRoute ?  ` --routing=true` : '';
        let commands = [
            `cd ${root}`,
            `ng generate module ${name} ${routeForModule}`,
            `ng generate c ${name} --module=${name} --export=true --prefix=webex --skip-tests --style=scss`
        ];
        return new Promise((resolve, reject)=>{
            exec(commands.join(' && '), (err, stdout, stderr) => {
                console.log(`Generated files for ${name}`);
                resolve(1);
            });
        });
    }
}

const ngGenerator = new NgGenerator();
ngGenerator.generate();