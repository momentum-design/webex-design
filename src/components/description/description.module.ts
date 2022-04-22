import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DescriptionComponent } from './description.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DescriptionComponent],
  exports: [DescriptionComponent],
})
export class DescriptionModule {
  static forRoot(): ModuleWithProviders<DescriptionModule> {
    return {
      ngModule: DescriptionModule,
    };
  }
}