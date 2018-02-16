import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ConverterPage } from '../converter/converter';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConverterPage;
  constructor() {

  }
}
