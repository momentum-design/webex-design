import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, ViewContainerRef, AfterViewInit, ViewChildren } from '@angular/core';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import { DomHelper, ScrollMotionHelper } from '../tools';
import { SlidesPageComponent } from './slides-page/slides-page';
import { SlidesNavComponent } from './slides-nav/slides-nav';
import mframe from 'mframe';
import { __read } from 'tslib';

@Component({
    selector: 'webex-slides',
    templateUrl: './slides.component.html',
    styleUrls:['./slides.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidesComponent implements AfterViewInit {

    @ViewChild('webex-slides-nav') navs: SlidesNavComponent;
    @ViewChildren('webex-slides-page') pages: SlidesPageComponent[];

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    ngAfterViewInit() {
        this.navs.navs = this.pages.map((page,index)=>{
            page.index = index;
            return {
                title: page.title,
                color: page.color,
                index: index
            };
        });
    }

    checkScroll() {
        if(this.pages) {
            const y = DomHelper.scrollTop();
            let _current = 0;
            this.pages.forEach((page,index)=>{
                if(y>=page.range.start) {
                    _current = index;
                }
            });
            this.navs.current = _current;
        }
    }

    scrollTo(index:number) {
        if(this.pages && this.pages[index]) {
            DomHelper.scrollTop(this.pages[index].scrollTop);
        }
    }

    initMotion(startPlus:number=0, endPlus:number=0) {
        if(this.pages) {
            this.pages.forEach((page)=>{
                page.initRange();
            });
            this.checkScroll();
        }
    }
}