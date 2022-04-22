import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [StoriesComponent]
})
export class StoriesModule { }