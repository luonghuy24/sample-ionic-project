import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseDetailPage } from '../course-detail/course-detail';

/**
 * Generated class for the ProgramOutlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-outline',
  templateUrl: 'program-outline.html',
})
export class ProgramOutlinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramOutlinePage');
  }

  viewCourse(){
    alert('ABC')
    this.navCtrl.push(CourseDetailPage, {

    });
  }
}
