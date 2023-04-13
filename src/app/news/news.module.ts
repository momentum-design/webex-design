import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { DetailModule } from './detail/detail.module';
import {
  ConModule,
  IntroductionModule 
} from '@lib';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    ConModule,
    DetailModule,
    IntroductionModule,
    NewsRoutingModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
