import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods: string[] = [];



  constructor(private appService: AppService){
    this.addFood('');
  }

  // addFood(foodItem: string) {
  //   this.foods.push(foodItem);
  // }

  addFood(foodItem: string) {
    this.appService.addItems('');
    console.log(foodItem)
  }

  removeFood(indexFood: number) {
    this.foods = this.foods.filter((val, index) => index != indexFood)
  }
}
