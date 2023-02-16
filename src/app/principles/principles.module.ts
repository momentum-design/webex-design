import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConModule,
  SlidesModule
} from '@lib';
import { PrinciplesRoutingModule } from './principles-routing.module';
import { PrinciplesComponent } from './principles.component';
import { PrinciplesSectionComponent } from './principles-section/principles-section.component';

@NgModule({
  imports: [
    CommonModule,
    ConModule,
    SlidesModule,
    PrinciplesRoutingModule
  ],
  declarations: [PrinciplesComponent, PrinciplesSectionComponent]
})
export class PrinciplesModule { }