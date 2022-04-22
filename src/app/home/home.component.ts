import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BannerComponent } from './banner/banner.component'
import { 
   PrinciplesBannerComponent,
   RolesBannerComponent,
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

   @ViewChild(BannerComponent) banner: BannerComponent;
   @ViewChild(TeamBannerComponent) team: TeamBannerComponent;
   @ViewChild(PrinciplesBannerComponent) principles: PrinciplesBannerComponent;
   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;
   @ViewChild(RolesBannerComponent) roles: RolesBannerComponent;

   constructor(private viewContainerRef: ViewContainerRef) {

   }

   ngAfterViewInit() {
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
               this.stories.initMotion();
               this.team.initMotion();
               this.principles.initMotion();
               this.roles.initMotion();
            }
         });
         motion.play();
      });
   }

}
