import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesBannerComponent } from './roles-banner.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [RolesBannerComponent],
  exports: [RolesBannerComponent],
})
export class RolesBannerModule {
  static forRoot(): ModuleWithProviders<RolesBannerModule> {
    return {
      ngModule: RolesBannerModule,
    };
  }
}
