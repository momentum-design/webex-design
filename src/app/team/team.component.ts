import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
   SlidesComponent,
   Responsive
} from '@lib'

@Component({
   templateUrl: './team.component.html',
   styleUrls: ['./team.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit{
   
   @ViewChild(SlidesComponent) slides: SlidesComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      Responsive.resize();
   }

   constructor(
      private router: ActivatedRoute,
      private cd: ChangeDetectorRef
      ) {

   }

   ngAfterViewInit() {
      
      Responsive.resize();
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
