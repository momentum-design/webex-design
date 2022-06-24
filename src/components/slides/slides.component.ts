import { ChangeDetectionStrategy, Component, 
    HostListener, ViewChild, AfterViewInit, 
    QueryList, ContentChildren, ChangeDetectorRef } from '@angular/core';
import { DomHelper } from '../tools';
import { SlidesPageComponent } from './slides-page/slides-page.component';
import { SlidesNavComponent } from './slides-nav/slides-nav.component';

@Component({
    selector: 'webex-slides',
    templateUrl: './slides.component.html',
    styleUrls:['./slides.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidesComponent implements AfterViewInit {

    @ViewChild(SlidesNavComponent) navs: SlidesNavComponent;
    @ContentChildren(SlidesPageComponent) pages:  QueryList<SlidesPageComponent>;

    @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
        this.checkScroll();
    }

    @HostListener('window:resize', ['$event']) onResize(e: Event): void {
        this.initMotion();
    }

    constructor() {}

    ngAfterViewInit() {
        Promise.resolve().then(()=>{
            this.navs.update(this.pages.map((page,index)=>{
                page.index = index;
                return {
                    title: page.title,
                    color: page.color,
                    index: index
                };
            }));
            this.initMotion();
        });
    }

    checkScroll() {
        if(this.pages) {
            const y = DomHelper.scrollTop();
            let _current = 0;
            this.pages.forEach((page,index)=>{
                if(y>=page.scrollTop-1) {
                    _current = index;
                }
            });
            this.navs.setCurrent(_current);
        }
    }

    scrollTo(index:number) {
        
        if(this.pages && this.pages.get(index)) {
            DomHelper.scrollTop(this.pages.get(index)?.scrollTop || 0);
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