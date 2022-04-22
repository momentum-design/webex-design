import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionBannerComponent } from './subscription-banner.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [SubscriptionBannerComponent],
  exports: [SubscriptionBannerComponent],
})
export class SubscriptionBannerModule {
  static forRoot(): ModuleWithProviders<SubscriptionBannerModule> {
    return {
      ngModule: SubscriptionBannerModule,
    };
  }
}
