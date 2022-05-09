import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input('foods') foodArr: string[] = [];
  // @Output('deleteEvt') foodDelete = new EventEmitter<number>();

  // foods = '';
  foods: string[] = [];

  constructor(private appService: AppService) {
    this.getItems();
  }

  ngOnInit(): void {
  }

  getItems() {
    this.appService.getItems().subscribe(response => {
      console.log(response);
      this.foods = response;
    })
  }

  // deleteItem(index: number) {
  //   this.foodDelete.emit(index);
  // }
}
