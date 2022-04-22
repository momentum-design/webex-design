import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'webex-subscription-banner',
    templateUrl: './subscription-banner.component.html',
    styleUrls:['./subscription-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionBannerComponent {

}