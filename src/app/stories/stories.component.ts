import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
   StoriesBannerComponent
} from '@lib';
import mframe from 'mframe';


@Component({
   templateUrl: './stories.component.html',
   styleUrls: ['./stories.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {

   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;


   ngAfterViewInit() {
      Promise.resolve().then(()=>{
         this.stories.initMotion();
      });
   }
}
