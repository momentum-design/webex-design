import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinciplesRoutingModule } from './principles-routing.module';
import { PrinciplesComponent } from './principles.component';

@NgModule({
  imports: [
    CommonModule,
    PrinciplesRoutingModule
  ],
  declarations: [PrinciplesComponent]
})
export class PrinciplesModule { }