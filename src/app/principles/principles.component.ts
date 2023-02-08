import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';
import { data } from './data/data';
import { SlidesComponent, Responsive } from '@lib'; 

@Component({
   templateUrl: './principles.component.html',
   styleUrls: ['./principles.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinciplesComponent implements AfterViewInit {

   data = data;

   @ViewChild(SlidesComponent) Slides: SlidesComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      Responsive.resize();
   }

   constructor() {
   }

   next(index:number) {
      this.Slides.scrollTo(index);
   }

   ngAfterViewInit() {
      Responsive.resize();
   }

}
