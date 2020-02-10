import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammeDetailPage } from './programme-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammeDetailPageRoutingModule {}
