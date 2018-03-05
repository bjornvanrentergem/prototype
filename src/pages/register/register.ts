import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {email:"", password:""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider, private menuCtrl:MenuController) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    console.log('Try to register');
    this.userService.register(this.user.email, this.user.password).then((result)=>{
      console.log('userService replied with, ', result);
      if(this.userService.isLoggedIn){
        this.navCtrl.setRoot(HomePage);

        this.menuCtrl.enable(true);
      }
    })
  }

}
