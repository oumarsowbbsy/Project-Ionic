import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'programme-detail',
    loadChildren: () => import('./programme-detail/programme-detail.module').then( m => m.ProgrammeDetailPageModule)
  },
  {
    path: 'detail1/:id',
    loadChildren: () => import('./detail1/detail1.module').then( m => m.Detail1PageModule)
  },
  {
    path: 'userdetail/:id',
    loadChildren: () => import('./userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
