import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type PrinciplesSectionDataItem = {
  primary: string;
  vs: string;
  description: string;
  color: string;
  color2:string;
  title?:string;
  secondary?: string;
  secondartDesc?: string;
};

@Component({
  selector: 'webex-principles-section',
  templateUrl: './principles-section.component.html',
  styleUrls:['./principles-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinciplesSectionComponent implements AfterViewInit {

    @Input() data: PrinciplesSectionDataItem;
    
    @Input() showNext: boolean = false;

    @Input() index:number;

    @Output() onClickNext = new EventEmitter<number>();

    constructor(
      private sanitizer: DomSanitizer,
      private cd: ChangeDetectorRef
      ) {
   
    }
    ngAfterViewInit() {
      Promise.resolve().then(()=>{
        this.forceUpdate();
      });
    }
    private forceUpdate() {
      if (this.cd) {
          this.cd.detectChanges();
      }
    }

    getBgClass() {
      return `background bg${this.index+1}`;
    }
    
    html(str:string) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }

    next() {
      this.onClickNext.emit(this.index+1);
    }

}
