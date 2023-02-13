import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import { ScrollMotionHelper } from '../tools';
import mframe from 'mframe';

@Component({
   selector: 'webex-principles-banner',
   templateUrl: './principles-banner.component.html',
   styleUrls:['./principles-banner.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinciplesBannerComponent implements IScrollMotion, AfterViewInit {

    scrollMotion: any;
    scrollMotionConfig: IScrollMotionConfig;

    @ViewChild('ball1') ball1: ElementRef;
    @ViewChild('ball2') ball2: ElementRef;
    @ViewChild('ball3') ball3: ElementRef;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    ngAfterViewInit() {
        Promise.resolve().then(()=>{
            this.initMotion();
        });
    }

    checkScroll() {
        ScrollMotionHelper.checkScroll(this);
    }

    initMotion(startPlus:number=0, endPlus:number=0) {
        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement, startPlus, endPlus);
        if(!this.scrollMotion) {
            const time = 30;
            this.scrollMotion =  mframe([{
                dom: this.ball1.nativeElement,
                frames: [
                    {attr: { d:'M471 145a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time: 0},
                    {attr: { d:'M407.3 192.8a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time:time}
                ]
            },{
                dom: this.ball2.nativeElement,
                frames: [
                    {attr: { d:'M68 364a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time: 0},
                    {attr: { d:'M65.0 281.8a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time:time}
                ]
            },{
                dom: this.ball3.nativeElement,
                frames: [
                    {attr: { d:'M579 576a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time: 0},
                    {attr: { d:'M507.0 648.8a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z' }, time:time}
                ]
            }]);
        }
        this.checkScroll();
    }
}
