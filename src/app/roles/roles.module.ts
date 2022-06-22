import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DescriptionModule,
  RolesBannerModule
} from '@lib';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionModule,
    RolesBannerModule,
    RolesRoutingModule
  ],
  declarations: [RolesComponent]
})
export class RolesModule { }