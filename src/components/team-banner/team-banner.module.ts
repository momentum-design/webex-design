import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamBannerComponent } from './team-banner.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [TeamBannerComponent],
  exports: [TeamBannerComponent],
})
export class TeamBannerModule {
  static forRoot(): ModuleWithProviders<TeamBannerModule> {
    return {
      ngModule: TeamBannerModule,
    };
  }
}
