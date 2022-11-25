import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
   StoriesBannerComponent
} from '@lib';

@Component({
   templateUrl: './stories.component.html',
   styleUrls: ['./stories.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {

   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;


   ngAfterViewInit() {

   }
}
