import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { VideoComponent } from './video.component';
import { RouterModule } from '@angular/router';
import { DescriptionModule } from '../description';

@NgModule({
  imports: [CommonModule, RouterModule, DescriptionModule],
  declarations: [VideoComponent],
  exports: [VideoComponent],
})
export class VideoModule {
  static forRoot(): ModuleWithProviders<VideoModule> {
    return {
      ngModule: VideoModule,
    };
  }
}