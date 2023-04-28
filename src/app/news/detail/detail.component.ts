import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleHelper, ArticleDIR} from '@lib';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
const { marked } = require('marked');
declare var require: any;
const yamlFront = require('yaml-front-matter');

const regHttp = /(http|https):\/\/([\w.]+\/?)\S*/i;
let FILEPATH:string;
let regImg = /<img\b[^>]*>/gi;
const renderer = {
  image(href:string, title:string, text:string) {
      href = regHttp.test(href) ? href :  ArticleHelper.getImageUrl(ArticleDIR.NEWS, FILEPATH, href);
      return `<img tabindex='2' src='${href}' alt='${text}' title='${text}'>`;
  },
  paragraph(text:string) {
    return regImg.test(text) ?
    `<div class='imgs'>${text}</div>`:
    `<p tabindex="2">${text}</p>` ;
  },
  heading(text:string, level:string) {
    return ` <h${level} tabindex="2">${text}</h${level}>`;
  }
};

marked.use({ renderer });

@Component({
  selector: 'webex-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isShowMask:boolean = false;
  isLoading:boolean = true;
  filePath:string;
  item:any={};
  content:SafeHtml;
  baseUrl:string='';
  maskImgUrl:string='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
    ) {
      this.baseUrl = (document.querySelector('base') as HTMLBaseElement).href;
  }

  buildData(id:any) {
    if(id) {
      this.filePath = ArticleHelper.decodeURIFilePath(id);
      FILEPATH = this.filePath;
      fetch(`${this.baseUrl}${ArticleDIR.NEWS}/${this.filePath}`)
      .then((response) => response.text())
      .then((data) => {
        let front = yamlFront.loadFront(data);
        this.item = ArticleHelper.makeHeaderData('detail', this.filePath,ArticleDIR.NEWS, front);

        this.content =this.sanitizer.bypassSecurityTrustHtml(marked.parse(this.item.__content));
        this.isLoading = false;
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.buildData(param.get('id'));
    });
  }

  clickContent(event:Event) {
    let tar = event.target as HTMLElement;
    if(tar.tagName.toLowerCase() ==='img' && typeof tar.hasAttribute('src')) {
      this.maskImgUrl = tar.getAttribute('src') as string;
      this.isShowMask = true;
    }
  }

  hideMask() {
    this.isShowMask = false;
  }

  stopBubble(event:Event) {
    event.stopPropagation();
  }

  forceUpdate() {
    Promise.resolve().then(()=>{
      if (this.cd) {
        this.cd.detectChanges();
      }
    });
  }

}
