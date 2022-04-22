import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {
  static forRoot(): ModuleWithProviders<FooterModule> {
    return {
      ngModule: FooterModule,
    };
  }
}