import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type navItem = {
    title: string;
    color: string;
    index: number;
};

@Component({
    selector: 'webex-slides-nav',
    templateUrl: './slides-nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class:'slides-nav'
    }
})
export class SlidesNavComponent {

    @Input() navs: navItem[]=[];

    @Input() current: number = 0;

    @Output() onClickNav = new EventEmitter<number>();

    constructor(){}

    navTo(index:number) {
        this.onClickNav.emit(index);
    }
    
}