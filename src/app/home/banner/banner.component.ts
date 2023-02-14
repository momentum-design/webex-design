import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
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
        titleH: 0,
        y0: 0,
        y1: 0,
        translateY: '60%',
        scale: 0.8
    };

    @ViewChild('background') background: ElementRef;
    @ViewChild('title') desc: DescriptionComponent;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.resize();
    }

    constructor(
        private viewContainerRef: ViewContainerRef,
        private cd: ChangeDetectorRef
    ) {

    }

    private forceUpdate() {
        if (this.cd) {
            this.cd.detectChanges();
        }
    }

    ngOnDestroy() {
        
    }

    ngAfterViewInit() {
        Promise.resolve().then(()=>{
            this.resize();
        });
    }

    resize() {
        let bodyW =  document.getElementsByTagName('body')[0].clientWidth;
        let background = this.background.nativeElement as HTMLElement;
        let w = background.clientWidth;
        let elementTitle = this.desc.viewContainerRef.element.nativeElement as HTMLElement;
        let titleH = elementTitle.clientHeight + elementTitle.offsetTop;
        let bh = 673/1400*w>>0;

        this.res.titleH = titleH;
        this.res.translateY = '60%';
        this.res.conH = bh+titleH/2;
        this.res.scale = '0.8';

        if(bodyW>1960) {
            this.res.y0 = '-20%';
            this.res.y1 = '-30%';
        } else if(bodyW>1440) {
            this.res.y0 = '-23%';
            this.res.y1 = '-33%';
        } else if(bodyW>1080) {
            this.res.y0 = '-30%';
            this.res.y1 = '-40%';
            this.res.translateY = '40%';
        } else if(bodyW>560) {
            this.res.y0 = '-40%';
            this.res.y1 = '-60%';
            this.res.translateY = '15%';
            this.res.scale = '0.9';
        }else {
            this.res.y0 = '-10%';
            this.res.y1 = '-30%';
            this.res.scale = '0.92';
            this.res.conH = bh+titleH;
            this.res.translateY = '20%';
        }
       
        background.style.height = bh + 'px';
        this.viewContainerRef.element.nativeElement.style.height = this.res.conH +'px';
        this.initMotion();
        this.forceUpdate();
    }

    initMotion() {
        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(this.viewContainerRef.element.nativeElement);
        const time = this.scrollMotionConfig.hide.start - this.scrollMotionConfig.show.end;
        this.scrollMotion =  mframe([{
            dom: this.background.nativeElement,
            frames: [
                { css: { transform: `scale(1.0) translateY(${this.res.y0})` }, time:0},
                { css: { transform: `scale(${this.res.scale}) translateY(${this.res.y1})` }, time: time, tween: 'easeInOut'},
            ]
        },{
            dom: this.desc.viewContainerRef.element.nativeElement,
            frames: [
                { css: { transform: 'translateY(0%)'}, time:0},
                { css: { transform: `translateY(${this.res.translateY})`}, time: time, tween: 'easeInOut'},
            ]
        }]);
        
        this.checkScroll();
    }

    checkScroll() {
        ScrollMotionHelper.checkScrollAttach(this);
    }

}