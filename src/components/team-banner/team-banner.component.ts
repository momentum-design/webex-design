import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollMotionMin, ScrollMotionHelper } from '../tools';
import mframe from 'mframe';

@Component({
    selector: 'webex-team-banner',
    templateUrl: './team-banner.component.html',
    styleUrls:['./team-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamBannerComponent {
    
    scrollMotionMins: ScrollMotionMin[] = [];
    overlayers: NodeListOf<Element>;
    
    @ViewChild('list') list: ElementRef;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll(); 
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor() {}

    checkScroll() {
        this.scrollMotionMins.forEach((scrollMotionMin)=>{
            ScrollMotionHelper.checkScroll(scrollMotionMin);
        });
    }

    initMotion() {
        if(!this.scrollMotionMins || this.scrollMotionMins.length===0) {
            this.scrollMotionMins = [];
            this.overlayers = (this.list.nativeElement as HTMLElement).querySelectorAll('I');
            this.overlayers.forEach((element)=>{
                const scrollMotionMin = new ScrollMotionMin();
                scrollMotionMin.scrollMotion = mframe({
                    dom: element,
                    frames: [
                        {css: { left: '-20.0%' }, time: 0},
                        {css: { left: '100.0%' }, time: 30, tween: 'easeInOut'},
                    ]
                });
                this.scrollMotionMins.push(scrollMotionMin);
            });
        }
        this.scrollMotionMins.forEach((scrollMotionMin:ScrollMotionMin, index)=>{
            scrollMotionMin.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.overlayers[index]);
            ScrollMotionHelper.reset(scrollMotionMin);
        });
        this.checkScroll();
    }

}
