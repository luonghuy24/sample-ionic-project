import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LengthConverterProvider } from '../../providers//length-converter';

@IonicPage()
@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
})

export class ConverterPage {
  input = 100;
  output = "";
  fromUnit = "Celsius";
  toUnit = "Fahrenheit";

  constructor(public navCtrl: NavController, public navParams: NavParams, public lengthConverterService: LengthConverterProvider) {
    this.convert();
  }

  convert(){
    this.output = this.lengthConverterService.cal(this.input, this.fromUnit, this.toUnit);
  }
}
