import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';
  foods: string[] = [];

  constructor() {
  }

  addFood(foodItem: string) {
    this.foods.push(foodItem);
  }

  removeFood(indexFood: number) {
    this.foods = this.foods.filter((val, index) => index != indexFood)
  }
}
