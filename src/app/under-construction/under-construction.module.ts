import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionModule } from '@lib';
import { UnderConstructionRoutingModule } from './under-construction-routing.module';
import { UnderConstructionComponent } from './under-construction.component';

@NgModule({
  imports: [
    CommonModule,
    UnderConstructionRoutingModule,
    DescriptionModule
  ],
  declarations: [UnderConstructionComponent]
})
export class UnderConstructionModule { }