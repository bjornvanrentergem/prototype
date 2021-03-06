import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MonumentsTopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monuments-top',
  templateUrl: 'monuments-top.html',
})
export class MonumentsTopPage {
  monuments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonumentsTopPage');
  }

  home(){
    this.app.getRootNav().setRoot(HomePage);
  }

}
