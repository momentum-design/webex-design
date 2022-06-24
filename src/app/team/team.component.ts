import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
   RolesBannerComponent
} from '@lib';

@Component({
   templateUrl: './team.component.html',
   styleUrls: ['./team.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit{
   
   @ViewChild(RolesBannerComponent) roles: RolesBannerComponent;

   ngAfterViewInit() {
      Promise.resolve().then(()=>{
         this.roles.initMotion();
      });
   }
}
