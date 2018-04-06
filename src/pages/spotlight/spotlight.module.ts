import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpotlightPage } from './spotlight';

@NgModule({
  declarations: [
    SpotlightPage,
  ],
  imports: [
    IonicPageModule.forChild(SpotlightPage),
  ],
})
export class SpotlightPageModule {}
