import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  result = '';
  op = true;

  constructor(public navCtrl: NavController) {
  
  }
  
  btnClicked(btn) {
    if (btn == 'C') {
        this.result = '';
    }
    else if (btn == '=') {
        this.result = eval(this.result);
    }
    else {
        this.result += btn;
    }
  }

}
