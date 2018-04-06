import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpotlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spotlight',
  templateUrl: 'spotlight.html',
})
export class SpotlightPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Navigated with params', navParams);

    if(navParams.data){
      this.item = navParams.data;
    }else{
      console.log('Navigated without params');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpotlightPage');
  }
}
