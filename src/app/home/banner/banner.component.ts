import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ScrollMotionHelper, DescriptionComponent } from '@lib';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import mframe from 'mframe';

@Component({
    selector: 'webex-home-banner',
    templateUrl: './banner.component.html',
    styleUrls:['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnDestroy, IScrollMotion, AfterViewInit  {

    scrollMotionConfig: IScrollMotionConfig;
    scrollMotion: any;
    preScroll:number | null;
    isPlayingScrollDown: boolean = false;

    res:any = {
        conH: 0,
        y0: 0,
        y1: 0
    };

    @ViewChild('background') background: ElementRef;
    @ViewChild('title') desc: DescriptionComponent;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.resize();
        this.initMotion();
    }

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    ngOnDestroy() {
        
    }

    ngAfterViewInit() {
        this.resize();
    }

    resize() {
        let background = this.background.nativeElement as HTMLElement;
        let w = background.clientWidth;
        let titleH = (this.desc.viewContainerRef.element.nativeElement as HTMLElement).clientHeight;
        let bh = 673/1400*w>>0;

        if(w>2560) {
            this.res.conH = bh+titleH/2;
            this.res.y0 = titleH*0.9;
            this.res.y1 = titleH*0.8;
        } else if(w>1960) {
            this.res.conH = bh+titleH/2;
            this.res.y0 = titleH*0.8;
            this.res.y1 = titleH*0.7;
        } else if(w>1440) {
            this.res.conH = bh+titleH/2;
            this.res.y0 = titleH*0.7;
            this.res.y1 = titleH*0.6;
        } else if(w>1080) {
            this.res.conH = bh+titleH/2;
            this.res.y0 = titleH*0.6;
            this.res.y1 = titleH*0.5;
        } else {
            this.res.conH = bh+titleH;
            this.res.y0 = 0;
            this.res.y1 = 0;
        }
       
        background.style.height = bh + 'px';
        background.style.top = this.res.y0  + 'px';
        this.viewContainerRef.element.nativeElement.style.height = this.res.conH +'px';
    }

    checkScroll() {
        ScrollMotionHelper.checkScroll(this);
    }

    initMotion() {
        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement,this.res.y0,this.res.y0);
        if(!this.scrollMotion) {
            const time = 30;
            this.scrollMotion =  mframe([{
                dom: this.background.nativeElement,
                frames: [
                    { css: { transform: 'scale(1.0)', top: this.res.y0+'px' }, time:0},
                    { css: { transform: 'scale(0.74)' , top: this.res.y1+'px' }, time: time, tween: 'easeInOut'},
                ]
            }]);
        };
        this.checkScroll();
    }

}