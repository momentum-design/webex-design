import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoriesBannerComponent } from './stories-banner.component';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [StoriesBannerComponent],
  exports: [StoriesBannerComponent],
})
export class StoriesBannerModule {
  static forRoot(): ModuleWithProviders<StoriesBannerModule> {
    return {
      ngModule: StoriesBannerModule,
    };
  }
}
