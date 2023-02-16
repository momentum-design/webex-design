import { NgModule } from '@angular/core';
import { ConModule } from './con';
import { DescriptionModule } from './description';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { PlaceholderModule } from './placeholder';
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
    ConModule,
    DescriptionModule,
    HeaderModule,
    PlaceholderModule,
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
    ConModule,
    DescriptionModule,
    HeaderModule,
    PlaceholderModule,
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
