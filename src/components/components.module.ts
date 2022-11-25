import { NgModule } from '@angular/core';
import { DescriptionModule } from './description';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { PrinciplesBannerModule } from './principles-banner';
import { RolesBannerModule } from './roles-banner';
import { StoriesBannerModule } from './stories-banner';
import { SubscriptionBannerModule } from './subscription-banner';
import { SubscriptionBannerSimpleModule } from './subscription-banner-simple';
import { TeamBannerModule } from './team-banner';
import { VideoModule } from './video';

@NgModule({
  exports: [
    FooterModule,
    DescriptionModule,
    HeaderModule,
    PrinciplesBannerModule,
    RolesBannerModule,
    StoriesBannerModule,
    SubscriptionBannerModule,
    SubscriptionBannerSimpleModule,
    TeamBannerModule,
    VideoModule
  ],
  imports: [
    FooterModule,
    DescriptionModule,
    HeaderModule,
    PrinciplesBannerModule,
    RolesBannerModule,
    StoriesBannerModule,
    SubscriptionBannerModule,
    SubscriptionBannerSimpleModule,
    TeamBannerModule,
    VideoModule
  ],
})
export class ComponentsModule {}
