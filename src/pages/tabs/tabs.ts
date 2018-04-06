import { Component } from '@angular/core';

import { SpotlightPage } from '../spotlight/spotlight';
import { MonumentsTopPage } from '../monuments-top/monuments-top';
import { MonumentsSearchPage } from '../monuments-search/monuments-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SpotlightPage;
  tab2Root = MonumentsTopPage;
  tab3Root = MonumentsSearchPage;

  constructor() {
  }
}
