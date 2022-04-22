import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrinciplesComponent } from './principles.component';

const routes: Routes = [
  {
    path: '',
    component: PrinciplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinciplesRoutingModule { }