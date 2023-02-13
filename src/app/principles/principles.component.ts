import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { data } from './data/data';
import { SlidesComponent, Responsive } from '@lib'; 

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

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      this.resize();
   }

   constructor(private cd: ChangeDetectorRef) {
   }

   resize() {
      let bodyW = (document.querySelector('body') as HTMLElement).clientWidth;
      let contentW = Responsive.resize();
      let windowHeight = window.innerHeight || document.body.clientHeight;
      let tml = 16;
      if(bodyW > 1080) {
         let navW =(this.Slides.navs.viewContainerRef.element.nativeElement as HTMLElement).clientWidth;
         let pageMargin = (bodyW - contentW) /2;
         tml = Math.max(0, navW+20-pageMargin);
      }
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
