import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ConModule,
  DescriptionModule,
  PlaceholderModule,
  TeamBannerModule
} from '@lib';
import { ManifestoRoutingModule } from './manifesto-routing.module';
import { ManifestoComponent } from './manifesto.component';

@NgModule({
  imports: [
    CommonModule,
    ConModule,
    DescriptionModule,
    PlaceholderModule,
    TeamBannerModule,
    ManifestoRoutingModule,
  ],
  declarations: [ManifestoComponent]
})
export class ManifestoModule { }