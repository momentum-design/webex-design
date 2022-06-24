import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesComponent } from './slides.component';
import { SlidesNavComponent } from './slides-nav/slides-nav.component';
import { SlidesPageComponent } from './slides-page/slides-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SlidesComponent,SlidesNavComponent,SlidesPageComponent],
  exports: [SlidesComponent,SlidesNavComponent,SlidesPageComponent],
})
export class SlidesModule {
  static forRoot(): ModuleWithProviders<SlidesModule> {
    return {
      ngModule: SlidesModule
    };
  }
}
