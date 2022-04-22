import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import { ScrollMotionHelper } from '../tools';
import mframe from 'mframe';

@Component({
    selector: 'webex-stories-banner',
    templateUrl: './stories-banner.component.html',
    styleUrls:['./stories-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesBannerComponent implements IScrollMotion {

    scrollMotion: any;
    scrollMotionConfig: IScrollMotionConfig;

    @ViewChild('avatar1') avatar1: ElementRef;
    @ViewChild('avatar2') avatar2: ElementRef;
    @ViewChild('avatar3') avatar3: ElementRef;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    checkScroll() {
        ScrollMotionHelper.checkScrollAttach(this);
    }

    initMotion(startPlus:number=0, endPlus:number=0) {
        const scrollConfig1 = ScrollMotionHelper.getDomViewRange(this.avatar1.nativeElement, startPlus, endPlus);
        const scrollConfig2 = ScrollMotionHelper.getDomViewRange(this.avatar1.nativeElement, startPlus, endPlus);
        const scrollConfig3 = ScrollMotionHelper.getDomViewRange(this.avatar3.nativeElement, startPlus, endPlus);
        this.scrollMotionConfig = {
            show: {
                start: scrollConfig1.show.start,
                end: scrollConfig1.show.end
            },
            hide: {
                start: scrollConfig3.hide.start,
                end: scrollConfig3.hide.end
            }
        };
        const start = scrollConfig1.show.end;
        this.scrollMotion =  mframe([{
            dom: this.avatar1.nativeElement,
            frames: [
                {css: { transform: 'translateX(20.0%)' }, time: scrollConfig1.show.end - start},
                {css: { transform: 'translateX(0.0%)' }, time: scrollConfig1.hide.start - start},
            ]
        },{
            dom: this.avatar2.nativeElement,
            frames: [
                {css: { transform: 'translateX(-20.0%)' }, time: scrollConfig2.show.end - start},
                {css: { transform: 'translateX(0.0%)' }, time: scrollConfig2.hide.start - start},
            ]
        },{
            dom: this.avatar3.nativeElement,
            frames: [
                {css: { transform: 'scale(1.5)' }, time: scrollConfig3.show.end - start},
                {css: { transform: 'scale(1.0)' }, time: scrollConfig3.hide.start- start},
            ]
        }]);
        this.checkScroll();
    }

}