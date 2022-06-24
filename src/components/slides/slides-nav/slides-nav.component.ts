import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

type navItem = {
    title: string;
    color: string;
    index: number;
};

@Component({
    selector: 'webex-slides-nav',
    templateUrl: './slides-nav.component.html',
    styleUrls:['./slides-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class:'slides-nav'
    }
})
export class SlidesNavComponent {

    @Input() navs: navItem[]=[];

    @Input() current: number = 0;

    @Output() onClickNav = new EventEmitter<number>();

    constructor(private cd: ChangeDetectorRef){

    }

    update(navs: navItem[]) {
        this.navs = navs;
        this.forceUpdate();
    }

    setCurrent(current:number) {
        this.current = current;
        this.forceUpdate();
    }

    navTo(index:number) {
        this.onClickNav.emit(index);
    }

    getIndex(index:number):string {
        let i=index+1;
        if(i<10) {
            return `0${i}`;
        } else {
            return i.toString();
        }
    }

    private forceUpdate() {
        if (this.cd) {
            this.cd.detectChanges();
        }
    }
    
}