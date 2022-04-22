import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ScrollMotionHelper } from '@lib';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import mframe from 'mframe';

@Component({
    selector: 'webex-home-banner',
    templateUrl: './banner.component.html',
    styleUrls:['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnDestroy, IScrollMotion  {

    scrollMotionConfig: IScrollMotionConfig;
    scrollMotion: any;
    preScroll:number | null;
    isPlayingScrollDown: boolean = false;

    @ViewChild('path1') path1: ElementRef;
    @ViewChild('path2') path2: ElementRef;
    @ViewChild('path3') path3: ElementRef;
    @ViewChild('path4') path4: ElementRef;
    @ViewChild('path5') path5: ElementRef;
    @ViewChild('path6') path6: ElementRef;
    @ViewChild('path7') path7: ElementRef;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    ngOnDestroy() {
        
    }

    checkScroll() {
        ScrollMotionHelper.checkScroll(this);
    }

    initMotion() {
        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement);
        if(!this.scrollMotion) {
            const time = 30;
            this.scrollMotion =  mframe([{
                dom: this.path1.nativeElement,
                frames: [
                    {attr: { d:'M524.9,191.2a30.4,30.4,0,0,1,-34.2,8.2l-135.2,-53.9a30.4,30.4,0,0,1,22.5,-56.5l135.3,54a30.4,30.4,0,0,1,11.6,48.2z' }, time:0},
                    {attr: { d:'M382.8,280.6a30.4,30.4,0,0,1,-28.6,-20.3l-48.6,-137.3a30.4,30.4,0,1,1,57.3,-20.3l48.6,137.3a30.4,30.4,0,0,1,-28.7,40.6z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path2.nativeElement,
                frames: [
                    {attr: { d:'M420,146.1l131,-62.9a24.5,24.5,0,0,1,23.4,43l-123.8,76.1a32,32,0,1,1,-30.7,-56.2z' }, time:0},
                    {attr: { d:'M352.9,240l36.1,-140.5a24.5,24.5,0,0,1,48,9.7l-21.5,143.7a32,32,0,1,1,-62.7,-12.7z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path3.nativeElement,
                frames: [
                    {attr: { d:'M695.7,216.4l-265.4,-8.7a26.1,26.1,0,0,1,-2.5,-52.1l263.4,-34.1a47.7,47.7,0,1,1,4.5,95z' }, time:0},
                    {attr: { d:'M625.1,149.3l-231.7,129.7a26.2,26.2,0,0,1,-29,-43.3l207.6,-165.3a47.7,47.7,0,1,1,53,78.9z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path4.nativeElement,
                frames: [
                    {attr: { d:'M570.4,82.2l174.4,67.3a36.6,36.6,0,1,1,-31.5,65.9l-162,-93.4a22.1,22.1,0,0,1,19.1,-39.8z' }, time:0},
                    {attr: { d:'M428,86.2l131.4,133a36.6,36.6,0,1,1,-55.7,47.1l-109.4,-151.6a22.1,22.1,0,0,1,33.8,-28.5z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path5.nativeElement,
                frames: [
                    {attr: { d:'M372.6,147.2a30.7,30.7,0,1,0,-22.9,-56.9l-173,69a30.7,30.7,0,1,0,22.8,56.9l173.1,-69z' }, time:0},
                    {attr: { d:'M355.7,130.7a30.7,30.7,0,1,0,-46,-40.4l-123.6,139.5a30.7,30.7,0,1,0,46,40.5l123.5,-139.6z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path6.nativeElement,
                frames: [
                    {attr: { d:'M171.4,216a30.7,30.7,0,0,0,26,-55.4l-127.9,-66.6a36.3,36.3,0,1,0,-31,65.4l133,56.5z' }, time:0},
                    {attr: { d:'M178.2,260.2a30.6,30.6,0,1,0,58.8,-17.2l-35,-140a36.3,36.3,0,1,0,-69.5,20.2l45.8,137z' }, time: time, tween: 'easeInOut'},
                ]
            },{
                dom: this.path7.nativeElement,
                frames: [
                    {attr: { d:'M256.4,147.7a31.8,31.8,0,1,0,0,-63.6a31.8,31.8,0,0,0,0,63.6z' }, time:0},
                    {attr: { d:'M204.8,160.1a31.8,31.8,0,1,0,0,-63.5a31.8,31.8,0,0,0,0,63.5z' }, time: time, tween: 'easeInOut'},
                ]
            }]);
        }
        this.checkScroll();
    }

}