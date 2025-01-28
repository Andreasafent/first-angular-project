import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAbbreviate'
})
export class NumberAbbreviatePipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 1): string {
    if(value === null || value === undefined){
      return "";
    }



    if (value<1_000){
      return value.toString();
    }else if (value>=1000 && value < 1_000_000){
      return (value / 1_000).toFixed(decimalPlaces) + "K";
    }else if (value >= 1_000_000 && value < 1_000_000_000){
      return (value / 1_000_000).toFixed(decimalPlaces) + "M";
    }else{
      return (value / 1_000_000_000).toFixed(decimalPlaces) + "B";
    }
  }

}
