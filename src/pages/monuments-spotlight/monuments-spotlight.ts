import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MonumentsSpotlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monuments-spotlight',
  templateUrl: 'monuments-spotlight.html',
})
export class MonumentsSpotlightPage {
  monuments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonumentsSpotlightPage');
  }

  home(){
    this.app.getRootNav().setRoot(HomePage);
  }

}
