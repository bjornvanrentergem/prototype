import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentsSearchPage } from './monuments-search';

@NgModule({
  declarations: [
    MonumentsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentsSearchPage),
  ],
})
export class MonumentsSearchPageModule {}
