import { ChangeDetectionStrategy, Component, Input, ViewContainerRef } from '@angular/core';
import { IRange } from '@types';
import { DomHelper, ScrollMotionHelper } from 'src/components/tools';

@Component({
    selector: 'webex-slides-page',
    templateUrl: './slides-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls:['./slides-page.component.scss'],
    host: {
        class:'slides-page'
    }
})
export class SlidesPageComponent {

    @Input() title: string="";

    @Input() color: string='#ffffff';

    index: number;
    range:IRange;
    scrollTop:number;


    constructor(public viewContainerRef: ViewContainerRef) {

    }

    initRange() {
        const scrollRange = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement);
        this.range = {
            start: scrollRange.show.start,
            end: scrollRange.hide.end
        };
        this.scrollTop = DomHelper.postion(this.viewContainerRef.element.nativeElement).y-96;
    }
    
}