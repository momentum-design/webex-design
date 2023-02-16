import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConModule,
  DescriptionModule,
  PlaceholderModule,
  RolesBannerModule,
  SlidesModule,
} from '@lib';
import { TeamSectionComponent } from './team-section/team-section.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [
    CommonModule,
    ConModule,
    DescriptionModule,
    PlaceholderModule,
    RolesBannerModule,
    SlidesModule,
    TeamRoutingModule
  ],
  declarations: [TeamComponent, TeamSectionComponent]
})
export class TeamModule { }