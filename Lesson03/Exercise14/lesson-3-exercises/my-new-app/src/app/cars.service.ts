import { Injectable } from '@angular/core';

@Injectable()

export class CarsService {
  public hondaCar = [
    {
      id: "1",
      model: "Accord",
      year: "2012"
    },
    {
      id: "2",
      model: "Accord Hybrid",
      year: "2015"
    },
    {
      id: "3",
      model: "CR-V",
      year: "2013"
    },
    {
      id: "4",
      model: "Civic",
      year: "2016"
    },
    {
      id: "5",
      model: "Civic Hybrid",
      year: "2014"
    }
  ]
  constructor() { }


  public getHondaCar(id: string): any {
    console.log(id);
    let car: any;
    for (let i = 0; i < this.hondaCar.length; i++) {
      console.log(this.hondaCar[i].id);
      if (id === this.hondaCar[i].id) {
        car = this.hondaCar[i];
        break;
      }
    }
    return car;
  }
}
