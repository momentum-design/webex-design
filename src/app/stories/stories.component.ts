import { ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';
import {
   StoriesBannerComponent,
   Responsive
} from '@lib';

@Component({
   templateUrl: './stories.component.html',
   styleUrls: ['./stories.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {

   @ViewChild(StoriesBannerComponent) stories: StoriesBannerComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      Responsive.resize();
   }

   ngAfterViewInit() {
      Responsive.resize();
   }
}
