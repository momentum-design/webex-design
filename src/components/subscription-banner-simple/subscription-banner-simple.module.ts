import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionBannerSimpleComponent } from './subscription-banner-simple.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [SubscriptionBannerSimpleComponent],
  exports: [SubscriptionBannerSimpleComponent],
})
export class SubscriptionBannerSimpleModule {
  static forRoot(): ModuleWithProviders<SubscriptionBannerSimpleModule> {
    return {
      ngModule: SubscriptionBannerSimpleModule,
    };
  }
}
