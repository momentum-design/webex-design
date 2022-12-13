import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule,
  RolesBannerModule,
  SlidesModule,
} from '@lib';
import { TeamSectionComponent } from './team-section/team-section.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    RolesBannerModule,
    SlidesModule,
    TeamRoutingModule
  ],
  declarations: [TeamComponent, TeamSectionComponent]
})
export class TeamModule { }