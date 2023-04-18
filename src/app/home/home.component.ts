import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BannerComponent } from './banner/banner.component'
import { 
   ArticleHelper, 
   ArticleDIR,
   PrinciplesBannerComponent,
   StoriesBannerComponent,
   TeamBannerComponent
} from '@lib';
import mframe from 'mframe';

@Component({
   templateUrl: './home.component.html',
   styleUrls:['./home.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {

   news:any;

   @ViewChild(BannerComponent) banner: BannerComponent;
   @ViewChild(TeamBannerComponent) team: TeamBannerComponent;
   @ViewChild(PrinciplesBannerComponent) principles: PrinciplesBannerComponent;
   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;

   constructor(private viewContainerRef: ViewContainerRef) {

   }

   ngOnInit(): void {
      fetch(`${ArticleDIR.ROOT}/news.json`)
      .then((response) => response.json())
      .then((data) => {
        this.news = ArticleHelper.makeList(data, ArticleDIR.NEWS, 1)[0];
      });
    }

   ngAfterViewInit() {

      Promise.resolve().then(()=>{

         const motion = mframe([{
            dom: this.viewContainerRef.element.nativeElement,
            frames: [
               {css: { opacity:'0', transform: 'translate(0,100px)' }, time:0},
               {css: { opacity:'1.0'}, tween: 'easeInOut', time:60},
               {css: { transform: 'translate(0,0px)' }, tween: 'easeInOut', time:120}
            ]
         }], {
            end: ()=>{
               //this.banner.initMotion();
               this.principles.initMotion();
            }
         });
         motion.play();

      });
   }

}
