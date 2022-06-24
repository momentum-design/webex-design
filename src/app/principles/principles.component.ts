import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { data } from './data/data';
import { SlidesComponent } from '@lib'; 

@Component({
   templateUrl: './principles.component.html',
   styleUrls: ['./principles.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinciplesComponent {

   data = data;

   @ViewChild(SlidesComponent) Slides: SlidesComponent;

   constructor() {
   }

   next(index:number) {
      this.Slides.scrollTo(index);
   }

}
