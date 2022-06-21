import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'webex-slides-page',
    templateUrl: './slides-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class:'slides-page'
    }
})
export class SlidesPageComponent {

    @Input() title: string="";

    @Input() color: string='#ffffff';
    
}