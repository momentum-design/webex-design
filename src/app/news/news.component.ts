import { Component, OnInit } from '@angular/core';
import { ArticleHelper, ArticleDIR} from '@lib';

@Component({
  selector: 'webex-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  isLoading:boolean = true;
  dataUrl = `${ArticleDIR.ROOT}/news.json`;
  data:any[]=[];

  constructor() { 

  }

  convertData(data:any) {
    let _data = Object.keys(data).map((key)=>{
      return ArticleHelper.makeHeaderData('detail', key, ArticleDIR.NEWS, data[key]);
    }).sort((a,b)=>{
      return b._date - a._date;
    });
    this.data = _data;
  }

  ngOnInit(): void {
    fetch(this.dataUrl)
    .then((response) => response.json())
    .then((data) => {
      this.data = ArticleHelper.makeList(data, ArticleDIR.NEWS);
      this.isLoading = false;
    });
  }

}
