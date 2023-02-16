import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { data } from './data/data';
import { 
   ConComponent,
   SlidesComponent 
} from '@lib'; 

@Component({
   templateUrl: './principles.component.html',
   styleUrls: ['./principles.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinciplesComponent implements AfterViewInit {

   data = data;
   textMarginLeft: string = '0';
   contentHeight:string = '100vh';

   @ViewChild(SlidesComponent) Slides: SlidesComponent;
   @ViewChild(ConComponent) WebexCon: ConComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      this.resize();
   }

   constructor(private cd: ChangeDetectorRef) {
   }

   resize() {
      let windowHeight = window.innerHeight || document.body.clientHeight;
      let tml =  this.Slides.checkInnerMargin((this.WebexCon.content.nativeElement as HTMLElement).clientWidth);
      this.textMarginLeft = tml+'px';
      this.contentHeight =  Math.max(0, windowHeight - 96) + 'px';

      if (this.cd) {
         this.cd.detectChanges();
      }
   }

   next(index:number) {
      this.Slides.scrollTo(index);
   }

   ngAfterViewInit() {
      this.resize();
   }

}
