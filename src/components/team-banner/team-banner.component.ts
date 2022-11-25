import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'webex-team-banner',
    templateUrl: './team-banner.component.html',
    styleUrls:['./team-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamBannerComponent {
    
    constructor() {}

}
