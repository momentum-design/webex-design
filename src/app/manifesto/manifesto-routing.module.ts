import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManifestoComponent } from './manifesto.component';

const routes: Routes = [
  {
    path: '',
    component: ManifestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManifestoRoutingModule { }