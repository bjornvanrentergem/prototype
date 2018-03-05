import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentsSpotlightPage } from './monuments-spotlight';

@NgModule({
  declarations: [
    MonumentsSpotlightPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentsSpotlightPage),
  ],
})
export class MonumentsSpotlightPageModule {}
