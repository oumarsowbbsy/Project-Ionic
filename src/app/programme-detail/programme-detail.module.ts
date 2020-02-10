import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammeDetailPageRoutingModule } from './programme-detail-routing.module';

import { ProgrammeDetailPage } from './programme-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammeDetailPageRoutingModule
  ],
  declarations: [ProgrammeDetailPage]
})
export class ProgrammeDetailPageModule {}
