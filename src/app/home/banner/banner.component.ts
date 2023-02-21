import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener,  ViewChild, ViewContainerRef } from '@angular/core';
import { ScrollMotionHelper, DescriptionComponent } from '@lib';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import mframe from 'mframe';

@Component({
    selector: 'webex-home-banner',
    templateUrl: './banner.component.html',
    styleUrls:['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements IScrollMotion, AfterViewInit  {

    scrollMotionConfig: IScrollMotionConfig;
    scrollMotion: any;
    preScroll:number | null;
    isPlayingScrollDown: boolean = false;
    titleHeight: number;

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

    ngAfterViewInit() {
        this.resize();
    }

    resize() {
        let bg = this.background.nativeElement as HTMLElement;
        let title = this.desc.viewContainerRef.element.nativeElement as HTMLElement;
        let container = this.viewContainerRef.element.nativeElement;
        let bgHeight = 570/1332*bg.clientWidth>>0;

        this.titleHeight = title.clientHeight + title.offsetTop;

        bg.style.height = bgHeight + 'px';
        container.style.height = bgHeight + this.titleHeight +'px';

        this.initMotion();
    }

    initMotion() {
        let container = this.viewContainerRef.element.nativeElement;
        let title = this.desc.viewContainerRef.element.nativeElement as HTMLElement;
        let bodyWidth =  document.getElementsByTagName('body')[0].clientWidth;

        let titleHeight = this.titleHeight;

        let config = {
            txtYEnd: titleHeight * 1.2,
            bgYStart: 0,
            bgYEnd: titleHeight * 0.125,
            bgScaleEnd: 0.8
        };

        if(bodyWidth<800) {
            config.txtYEnd = titleHeight * 0.2;
            config.bgYEnd =  - titleHeight * 0.2;
            config.bgScaleEnd = 0.9;
        } else if(bodyWidth<1080) {
            config.txtYEnd = titleHeight * 0.5;
            config.bgYEnd =  - titleHeight * 0.1;
        } else if(bodyWidth<1440) {
            config.txtYEnd = titleHeight * 0.6;
            config.bgYEnd =  - titleHeight * 0.1;
        } else if(bodyWidth<1960) {
            config.txtYEnd = titleHeight * 0.8;
            config.bgYEnd =  0;
        } else if(bodyWidth<2560) {
            config.txtYEnd = titleHeight;
            config.bgYEnd =  titleHeight *0.1;
        }

        this.scrollMotionConfig = ScrollMotionHelper.getDomViewRange(container);
    
        let plus1 = config.txtYEnd > 160 ? config.txtYEnd - 160 : 0;
        //scroll range
        //console.log('bodyWidth', bodyWidth, this.scrollMotionConfig.hide.start, this.scrollMotionConfig.show.end, plus1);
        this.scrollMotionConfig.hide.start += (plus1>>0);
        let distance = this.scrollMotionConfig.hide.start - this.scrollMotionConfig.show.end;

        const time = distance;
        this.scrollMotion =  mframe([{
            dom: this.background.nativeElement,
            frames: [
                { css: { transform: `scale(1.0) translateY(${config.bgYStart.toFixed(1)}px)`}, time:0},
                { css: { transform: `scale(${config.bgScaleEnd}) translateY(${config.bgYEnd.toFixed(1)}px)`}, time: time, tween: 'linear'},
            ]
        },{
            dom: this.desc.viewContainerRef.element.nativeElement,
            frames: [
                { css: { transform: 'translateY(0.0px)'}, time:0},
                { css: { transform: `translateY(${config.txtYEnd.toFixed(1)}px)`}, time: time, tween: 'linear'},
            ]
        }]);

        //dom 
        this.background.nativeElement.style.transform =  `scale(1.0) translateY(${config.bgYStart.toFixed(1)}px)`;
        this.checkScroll();
    }

    checkScroll() {
        ScrollMotionHelper.checkScrollAttach(this);
        this.forceUpdate();
    }

}