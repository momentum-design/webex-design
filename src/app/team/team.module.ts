import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule,
  StoriesBannerModule,
  SubscriptionBannerModule
} from '@lib';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    StoriesBannerModule,
    SubscriptionBannerModule,
    TeamRoutingModule
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }