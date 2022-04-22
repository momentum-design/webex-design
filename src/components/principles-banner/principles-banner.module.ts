import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrinciplesBannerComponent } from './principles-banner.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [PrinciplesBannerComponent],
  exports: [PrinciplesBannerComponent],
})
export class PrinciplesBannerModule {
  static forRoot(): ModuleWithProviders<PrinciplesBannerModule> {
    return {
      ngModule: PrinciplesBannerModule,
    };
  }
}
