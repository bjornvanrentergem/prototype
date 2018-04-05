import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GhentServiceProvider } from '../../providers/ghent-service/ghent-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private GhentService: GhentServiceProvider) {
    this.selectedItem = navParams.get('item');
    console.log("building overview page");
  }

  ionViewDidLoad(){
    console.log("loaded overview page");
    this.GhentService.getAll().subscribe((response)=>{
      console.log("Got this data", response);
      this.items = response;
    }, (error)=>{
      console.log("couldnt get data", error);
    });
  }

  itemTapped(event, item){
    console.log("tapped item", item);
  }
}
