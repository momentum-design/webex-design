import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ConModule,
  IntroductionModule 
} from '@lib';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ConModule,
    IntroductionModule,
    DetailRoutingModule
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }
