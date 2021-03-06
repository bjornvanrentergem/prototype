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
import { MonumentsDetailPage } from '../pages/monuments-detail/monuments-detail';
import { SettingsPage } from '../pages/settings/settings';
import { SpotlightPage } from '../pages/spotlight/spotlight';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserServiceProvider } from '../providers/user-service/user-service';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { GhentServiceProvider } from '../providers/ghent-service/ghent-service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



var config = {
  apiKey: "AIzaSyDD8qsNkX7uuFhldSLD7cy0j3YaYYiR3Vc",
  authDomain: "helloghent.firebaseapp.com",
  databaseURL: "https://helloghent.firebaseio.com",
  projectId: "helloghent",
  storageBucket: "helloghent.appspot.com",
  messagingSenderId: "922238063879"
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
    MonumentsDetailPage,
    SettingsPage,
    SpotlightPage,
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
    MonumentsSearchPage,
    MonumentsDetailPage,
    SettingsPage,
    SpotlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AuthenticateProvider,
    GhentServiceProvider
  ]
})
export class AppModule {}
