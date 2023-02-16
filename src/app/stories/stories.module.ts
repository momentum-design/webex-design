import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ConModule,
  DescriptionModule,
  StoriesBannerModule,
} from '@lib';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';

@NgModule({
  imports: [
    CommonModule,
    ConModule,
    DescriptionModule,
    StoriesBannerModule,
    StoriesRoutingModule
  ],
  declarations: [StoriesComponent]
})
export class StoriesModule { }