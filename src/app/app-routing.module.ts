import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: 'manifesto',
  loadChildren: () => import('./manifesto/manifesto.module').then(m => m.ManifestoModule),
  data: { navIndex: 2 }
},{
  path: 'principles',
  loadChildren: () => import('./principles/principles.module').then(m => m.PrinciplesModule),
  data: { navIndex: 4 }
},{
  path: 'stories',
  loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule),
  data: { navIndex: 5 }
},{
  path: 'team',
  loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
  data: { navIndex: 6 }
},{
  path: 'team/:tab',
  loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
},{
  path: 'what-is-new',
  loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
  data: { navIndex: 7}
},{
  path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  data: { navIndex: 1 }
},{
  path: 'under-construction',
  loadChildren: () => import('./under-construction/under-construction.module').then(m => m.UnderConstructionModule)
}];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
