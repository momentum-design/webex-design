import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
   StoriesBannerComponent
} from '@lib';
@Component({
   templateUrl: './team.component.html',
   styleUrls: ['./team.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit{
   
   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;

   ngAfterViewInit() {
      this.stories.initMotion();
   }
}
