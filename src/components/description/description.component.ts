import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'webex-description',
  templateUrl: './description.component.html',
  styleUrls:['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {

    @Input() primary: string;
    @Input() secondary: string;
    @Input() className: string='';
    @Input() url: string;
    @Input() link: string='';    

    @ViewChild('container') container: ElementRef;

    constructor(
      public viewContainerRef: ViewContainerRef,
      private sanitizer: DomSanitizer
      ) {
   
    }

    html(str:string) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }

}
