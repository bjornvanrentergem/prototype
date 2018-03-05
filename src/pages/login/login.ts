import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {email:"", password:""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider, public menuCtrl: MenuController) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('Try to login');
    this.userService.login(this.user.email, this.user.password).then((result)=>{
      console.log('userService replied with, ', result);
      if(this.userService.isLoggedIn){
        this.navCtrl.setRoot(HomePage);

        this.menuCtrl.enable(true);
      }
    })
  }

  register(){
    console.log('Try to register');
    this.navCtrl.push(RegisterPage);
  }

}
