import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import { ScrollMotionHelper } from '../tools';
import mframe from 'mframe';

@Component({
    selector: 'webex-roles-banner',
    templateUrl: './roles-banner.component.html',
    styleUrls:['./roles-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesBannerComponent implements IScrollMotion {

    scrollMotion: any;
    scrollMotionConfig: IScrollMotionConfig;
    preScroll:number|null;
    isPlayingScrollDown: boolean = false;

    @ViewChild('cards') list: ElementRef;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    checkScroll() {
        ScrollMotionHelper.checkScroll(this);
    }

    initMotion(startPlus:number=0, endPlus:number=0) {
        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement, startPlus, endPlus);
        const cards = (this.list.nativeElement as HTMLElement).querySelectorAll('.card');
        const time = 30;
        const step = 10;
        const configs:any[] = [];
        cards.forEach((element, index)=>{
            configs.push({
                dom: element,
                frames: [
                    {css: { transform: 'translateY(100.0px)' }, time: index * step},
                    {css: { transform: 'translateY(0.0px)' }, time: time + index * step, tween: 'easeInOut'},
                ]
            });
        });
        //reset
        ScrollMotionHelper.reset(this);
        this.scrollMotion = mframe(configs);
        this.checkScroll();
    }
}