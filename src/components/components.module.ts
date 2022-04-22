import { NgModule } from '@angular/core';
import { DescriptionModule } from './description';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { PrinciplesBannerModule } from './principles-banner';
import { RolesBannerModule } from './roles-banner';
import { StoriesBannerModule } from './stories-banner';
import { SubscriptionBannerModule } from './subscription-banner';
import { TeamBannerModule } from './team-banner';

@NgModule({
  exports: [
    FooterModule,
    DescriptionModule,
    HeaderModule,
    PrinciplesBannerModule,
    RolesBannerModule,
    StoriesBannerModule,
    SubscriptionBannerModule,
    TeamBannerModule
  ],
  imports: [
      FooterModule,
      DescriptionModule,
      HeaderModule,
      PrinciplesBannerModule,
      RolesBannerModule,
      StoriesBannerModule,
      SubscriptionBannerModule,
      TeamBannerModule
    ],
})
export class ComponentsModule {}
