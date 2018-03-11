import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentsDetailPage } from './monuments-detail';

@NgModule({
  declarations: [
    MonumentsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentsDetailPage),
  ],
})
export class MonumentsDetailPageModule {}
