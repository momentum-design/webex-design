import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule,
  SubscriptionBannerSimpleModule,
  TeamBannerModule
} from '@lib';
import { ManifestoRoutingModule } from './manifesto-routing.module';
import { ManifestoComponent } from './manifesto.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    SubscriptionBannerSimpleModule,
    TeamBannerModule,
    ManifestoRoutingModule,
  ],
  declarations: [ManifestoComponent]
})
export class ManifestoModule { }