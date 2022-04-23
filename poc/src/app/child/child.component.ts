import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('foods') foodArr: string[] = [];
  @Output('deleteEvt') foodDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItem(index: number) {
    this.foodDelete.emit(index);
  }
}
