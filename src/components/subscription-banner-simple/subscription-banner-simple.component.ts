import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'webex-subscription-banner-simple',
    templateUrl: './subscription-banner-simple.component.html',
    styleUrls:['./subscription-banner-simple.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionBannerSimpleComponent {

}