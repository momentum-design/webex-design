import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule,
  SubscriptionBannerSimpleModule,
  StoriesBannerModule,
} from '@lib';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    SubscriptionBannerSimpleModule,
    StoriesBannerModule,
    StoriesRoutingModule
  ],
  declarations: [StoriesComponent]
})
export class StoriesModule { }