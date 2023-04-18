import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { DescriptionModule } from '../description/index';

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [
    DescriptionModule,
    CommonModule
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
