import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';

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

    constructor(private viewContainerRef: ViewContainerRef) {
   
    }

}
