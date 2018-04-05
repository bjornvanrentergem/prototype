import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GhentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GhentServiceProvider {

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(private db:AngularFireDatabase) {
    console.log('Hello GhentServiceProvider Provider');

    this.itemRef = db.object('HelloGhent');
    this.item = this.itemRef.valueChanges();
  }

  getAll(){
    return this.db.list("HelloGhent").valueChanges();
  }
}
