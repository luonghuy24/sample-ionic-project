import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LengthConverterProvider } from '../../providers//length-converter';

@IonicPage()
@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
})

export class ConverterPage {
  input = 0;
  output = 0;
  fromUnit = "Celsius";
  toUnit = "Fahrenheit"

  constructor(public navCtrl: NavController, public navParams: NavParams, public lengthConverterService: LengthConverterProvider) {
  }

  changeFromUnit(value){
    this.fromUnit = value;    
    this.output = this.lengthConverterService.cal(this.input, this.fromUnit, this.toUnit);
  }

  changeToUnit(value){
    this.toUnit = value;    
    this.output = this.lengthConverterService.cal(this.input, this.fromUnit, this.toUnit);
  }

  changeInput(value){
    this.input = value;
    this.output = this.lengthConverterService.cal(this.input, this.fromUnit, this.toUnit);
  }
}
