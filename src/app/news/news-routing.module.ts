import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{
  path: '',
  component: NewsComponent
},{
  path: 'detail/:id',
  component: DetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
