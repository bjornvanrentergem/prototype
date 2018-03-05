import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MonumentsSpotlightPage } from '../pages/monuments-spotlight/monuments-spotlight';
import { MonumentsTopPage } from '../pages/monuments-top/monuments-top';
import { MonumentsSearchPage } from '../pages/monuments-search/monuments-search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserServiceProvider } from '../providers/user-service/user-service';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { MonumentsProvider } from '../providers/monuments/monuments';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

import { OrderByPipe } from '../pipes/order-by/order-by';



var config = {
  apiKey: "AIzaSyBReNvdNBykCGFxlsB_Psu6rQmGdWzhZJk",
  authDomain: "gentapp-32124.firebaseapp.com",
  databaseURL: "https://gentapp-32124.firebaseio.com",
  projectId: "gentapp-32124",
  storageBucket: "",
  messagingSenderId: "1062118213244"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    MonumentsSpotlightPage,
    MonumentsTopPage,
    MonumentsSearchPage,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    MonumentsSpotlightPage,
    MonumentsTopPage,
    MonumentsSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AuthenticateProvider,
    MonumentsProvider,
    MonumentsProvider
  ]
})
export class AppModule {}
