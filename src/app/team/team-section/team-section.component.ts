import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'webex-team-section',
  templateUrl: './team-section.component.html',
  styleUrls:['./team-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSectionComponent {

    @Input() primary: string;
    @Input() primaryContent: string;
    @Input() secondary: string;
    @Input() secondaryContent: string;
    @Input() color: string='';
    @Input() isFloat: boolean = false;  
    @Input() isShowLine: boolean = true; 

    constructor(
      private sanitizer: DomSanitizer
      ) {
    }

    html(str:string) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }

}
