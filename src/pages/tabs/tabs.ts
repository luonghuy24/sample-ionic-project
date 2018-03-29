import { Component } from '@angular/core';

import { HomePage } from '../home/home';
// import { ConverterPage } from '../converter/converter';
// import { AboutPage } from '../about/about';
import { ProgramOutlinePage } from '../program-outline/program-outline';
import { TeachersPage } from '../teachers/teachers';
import { CommentsPage } from '../comments/comments';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProgramOutlinePage;
  tab3Root = TeachersPage;
  tab4Root = CommentsPage;
  constructor() {

  }
}
