import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
   ConComponent,
   PlaceholderComponent,
   SlidesComponent,
   SlidesPageComponent
} from '@lib'

@Component({
   templateUrl: './team.component.html',
   styleUrls: ['./team.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit{

   textMarginLeft: number = 0;
   
   @ViewChild(SlidesComponent) slides: SlidesComponent;
   @ViewChild('last') lastPage: SlidesPageComponent;
   @ViewChild(PlaceholderComponent) placeholder: PlaceholderComponent;
   @ViewChild('webexCon') WebexCon: ConComponent;

   @HostListener('window:resize', ['$event']) onResize(e: Event): void {
      this.resize();
   }

   constructor(
      private router: ActivatedRoute,
      private cd: ChangeDetectorRef
      ) {

   }

   resize() {
      this.placeholder.fitHeight(this.lastPage.viewContainerRef.element.nativeElement.clientHeight + 200 );
      this.textMarginLeft = this.slides.checkInnerMargin((this.WebexCon.content.nativeElement as HTMLElement).clientWidth);
      Promise.resolve().then(()=>{
         this.forceUpdate();              
      });
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
