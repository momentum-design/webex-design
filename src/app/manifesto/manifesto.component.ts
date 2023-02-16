import { ChangeDetectionStrategy, ChangeDetectorRef, Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {
   PlaceholderComponent
} from '@lib'

@Component({
   templateUrl: './manifesto.component.html',
   styleUrls: ['./manifesto.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManifestoComponent  implements AfterViewInit {

   text_banner=`We believe it’s not about where you work, but how you work. We welcome diversity of thought and diversity of background. We see personal expression as the most genuine form of communication. We actively nurture an environment where everyone has a voice—their voice. 
   <br><br>
   We're committed to creating a design culture that’s honest, open, inclusive, supportive and amazingly creative. Where the stage is set for everyone to do the most meaningful work of their lives.
   <br><br>
   We’re Webex Design`;

   @ViewChild(PlaceholderComponent) placeholder: PlaceholderComponent;
   @ViewChild('area') area: ElementRef;

   constructor(
      private cd: ChangeDetectorRef
      ) {

   }

   resize() {
      this.placeholder.fitHeight(this.area.nativeElement.clientHeight + 200 );
      Promise.resolve().then(()=>{
         this.forceUpdate();              
      });
   }

   ngAfterViewInit() {
      this.resize();
   }

   private forceUpdate() {
      if (this.cd) {
          this.cd.detectChanges();
      }
   }

}
