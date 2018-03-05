import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MonumentsProvider } from '../../providers/monuments/monuments';

/**
 * Generated class for the MonumentsSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monuments-search',
  templateUrl: 'monuments-search.html',
})
export class MonumentsSearchPage {
  monuments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public monumentProvider: MonumentsProvider) {
    this.monuments = monumentProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonumentsSearchPage');
  }

  home(){
    this.app.getRootNav().setRoot(HomePage);
  }

}
