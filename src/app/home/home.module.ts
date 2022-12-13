import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule, 
  PrinciplesBannerModule,
  RolesBannerModule,
  StoriesBannerModule,
  TeamBannerModule
} from '@lib';
import { BannerComponent } from './banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    PrinciplesBannerModule,
    RolesBannerModule,
    StoriesBannerModule,
    TeamBannerModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent, 
    BannerComponent
  ]
})
export class HomeModule { }