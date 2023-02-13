import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
   SlidesComponent,
   SlidesPageComponent,
   Responsive
} from '@lib'

@Component({
   templateUrl: './team.component.html',
   styleUrls: ['./team.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit{
   
   @ViewChild(SlidesComponent) slides: SlidesComponent;
   @ViewChild('last') lastPage: SlidesPageComponent;
   @ViewChild('expand') expand: ElementRef;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      this.resize();
   }

   constructor(
      private router: ActivatedRoute,
      private cd: ChangeDetectorRef
      ) {

   }

   resize() {
      let windowHeight = window.innerHeight || document.body.clientHeight;
      this.expand.nativeElement.style.height = windowHeight - this.lastPage.viewContainerRef.element.nativeElement.clientHeight - 200 + 'px';
      Responsive.resize();
   }

   ngAfterViewInit() {
      
      this.resize();
      this.router.params.subscribe((params)=>{
         if(params.tab!==undefined) {
            Promise.resolve().then(()=>{
               this.forceUpdate();
               this.slides.scrollTo(+params.tab);               
            });
         }
      });

   }

   private forceUpdate() {
      if (this.cd) {
          this.cd.detectChanges();
      }
    }
}
