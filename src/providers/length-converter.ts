import { Injectable } from '@angular/core';

/*
  Generated class for the LengthConverterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LengthConverterProvider {

  output = 0;

  cal(input, fromUnit, toUnit){        
    switch(fromUnit) {
      case "Celsius":
        switch(toUnit){
          case "Fahrenheit":
            this.output = (input*1.8)+32;
            break;
          case "Kelvin":
            this.output = parseFloat(input.toString()) +273.15;
            break;
          default:
            this.output = input;
        }        
        break;
      case "Fahrenheit":
        switch(toUnit){
          case "Celsius":
            this.output = (input-32)/1.8
            break;    
          case "Kelvin":
            this.output = ((input-32)/1.8)+273.15
            break;    
          default:
            this.output = input;
        }        
        break;
      case "Kelvin":
        switch(toUnit){
          case "Celsius":
            this.output = parseFloat(input.toString()) -273.15
            break;    
          case "Fahrenheit":
            this.output = ((input-273.15)*1.8)+32
            break;    
          default:
            this.output = input;
        }        
        break;
    }
    return this.output;
  }
}
