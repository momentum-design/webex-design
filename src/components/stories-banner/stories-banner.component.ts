import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'webex-stories-banner',
    templateUrl: './stories-banner.component.html',
    styleUrls:['./stories-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesBannerComponent {
    @Input() isList: boolean = false;
}