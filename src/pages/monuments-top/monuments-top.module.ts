import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentsTopPage } from './monuments-top';

@NgModule({
  declarations: [
    MonumentsTopPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentsTopPage),
  ],
})
export class MonumentsTopPageModule {}
