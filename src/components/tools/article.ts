const dir_root =  'assets/articles';
const dir_news = `${dir_root}/news`;

export const ArticleDIR = {
    ROOT: dir_root,
    NEWS: dir_news
}

const regUrlTirm = /.md$/i;

export const ArticleHelper = {
    getFileFolder(path:string) {
        let arr = path.split('/');
        return arr.length > 1 ? arr.slice(0, arr.length-1).join('/') : '';
    },
    encodeURIFilePath(str:string) {
        // return str.replace(/\s/g, '-');
        return str.replace(/\s/g, '-').replace(/\//g, '_').replace(regUrlTirm,'');
    },
    decodeURIFilePath(str:string) {
        return str.replace(/\-/g, ' ').replace(/\_/g, '/')+'.md';
    },
    makeHeaderData(url:string, filePath:string, repoUrl:string ,data:any) {
        return Object.assign({}, data, {
            url: `${url}/${ ArticleHelper.encodeURIFilePath(filePath)}`,
            _date: new Date(data.date),
            image: ArticleHelper.getImageUrl(repoUrl, filePath,data['image'])
        });
    },
    getImageUrl(repo:string, filePath:string, imageUrl:string){
        return `${repo}/${ArticleHelper.getFileFolder(filePath)}/${imageUrl}`;
    },
    makeList(data:any, repo:string, topN?:number) {
        let _data = Object.keys(data).map((key)=>{
            return ArticleHelper.makeHeaderData('detail', key, repo, data[key]);
        }).sort((a,b)=>{
            return b._date - a._date;
        });
        return typeof topN==='number'? _data.slice(0,topN): _data;
    }
}