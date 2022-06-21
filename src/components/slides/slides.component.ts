import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, ViewContainerRef, AfterViewInit, ViewChildren } from '@angular/core';
import { IScrollMotion, IScrollMotionConfig } from '@types';
import { ScrollMotionHelper } from '../tools';
import { SlidesPageComponent } from './slides-page/slides-page';
import mframe from 'mframe';

type navItem = {
    title:string;
    color:string;
};

@Component({
    selector: 'webex-slides',
    templateUrl: './slides.component.html',
    styleUrls:['./slides.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidesComponent implements AfterViewInit {

    navs: navItem[]=[];

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
        this.navs = this.pages.map((page)=>{
            return {
                title: page.title,
                color: page.color
            };
        });
    }

    checkScroll() {
        //ScrollMotionHelper.checkScroll(this);
    }

    initMotion(startPlus:number=0, endPlus:number=0) {

    }
}