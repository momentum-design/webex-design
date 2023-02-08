import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { BannerComponent } from './banner/banner.component'
import { 
   PrinciplesBannerComponent,
   StoriesBannerComponent,
   TeamBannerComponent,
   Responsive
} from '@lib';
import mframe from 'mframe';

@Component({
   templateUrl: './home.component.html',
   styleUrls:['./home.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {

   @ViewChild(BannerComponent) banner: BannerComponent;
   @ViewChild(TeamBannerComponent) team: TeamBannerComponent;
   @ViewChild(PrinciplesBannerComponent) principles: PrinciplesBannerComponent;
   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      Responsive.resize();
   }

   constructor(private viewContainerRef: ViewContainerRef) {

   }

   ngAfterViewInit() {

      Responsive.resize();
      Promise.resolve().then(()=>{

         const motion = mframe([{
            dom: this.viewContainerRef.element.nativeElement,
            frames: [
               {css: { opacity:'0', transform: 'translate(0,100px)' }, time:0},
               {css: { opacity:'1.0'}, tween: 'easeInOut', time:30},
               {css: { transform: 'translate(0,0px)' }, tween: 'easeInOut', time:45}
            ]
         }], {
            end: ()=>{
               this.banner.initMotion();
               this.principles.initMotion();
            }
         });
         motion.play();

      });
   }

}
