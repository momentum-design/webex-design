import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';

@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule
  ],
  declarations: [RolesComponent]
})
export class RolesModule { }