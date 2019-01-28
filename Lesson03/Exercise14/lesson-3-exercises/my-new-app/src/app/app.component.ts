import { Component } from '@angular/core';
import { CarsService } from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app';

  public hondaCarObj: any;
  public carId: string;

  constructor(private carService: CarsService) { }

  public getHondaCarsDetail(): void {
    this.hondaCarObj = this.carService.getHondaCar(this.carId);
    console.log(this.hondaCarObj);
  }

}