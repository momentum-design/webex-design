const yamlFront = require('yaml-front-matter');
const fs = require('fs');
const path = require('path');

class MarkdownBuild {

    HeaderProps = ['date', 'title', 'description', 'image'];

    ROOT =  path.resolve(__dirname, '../src/assets/articles');
    // ./news
    constructor(ROOT) {
        if(ROOT) {
            this.ROOT = ROOT;
        }
    }

    _isUsefulFile(yml) {
        return this.HeaderProps.every((str)=>{
            return yml[str]!== undefined;
        });
    }

    _copyYml(yml) {
        let ret = {};
        this.HeaderProps.forEach((str)=>{
            return ret[str] = yml[str];
        });
        return ret;
    }
 
    _scan(folder) {
        let list = fs.readdirSync(folder);
        let arr =[];
        list.forEach((fileName)=>{
            let _path = path.join(folder, fileName);
            let _stat = fs.statSync(_path);
            if(_stat.isDirectory()) {
                arr = arr.concat(this._scan(_path));
            } else if(path.extname(_path).toLowerCase()==='.md'){
                arr.push(_path);
            }
        });
        return arr;
    }

    _scanFile(filePath) {
        return new Promise((resolve)=>{
            fs.readFile( filePath, {}, (err, data)=>{
                resolve(yamlFront.loadFront(data));
            });            
        });
    }

    getIndexJson(_dir) {
        return new Promise((resolve)=>{
            let ret={};
            let dir = path.resolve(this.ROOT, _dir);
            let filePaths= this._scan(dir);
            let todo = filePaths.length;
            if(todo===0) {
                resolve(ret);
            }
            let callback = ()=>{
                todo--;
                if(todo<=0) {
                    resolve(ret);
                }
            };
            filePaths.forEach((fp)=>{
                this._scanFile(fp).then((yHeader)=>{
                    if(this._isUsefulFile(yHeader)) {
                        ret[path.relative(dir, fp)] = this._copyYml(yHeader);
                    }
                    callback();
                })
            });
        });
    }
}

module.exports = {
    MarkdownBuild
}
  