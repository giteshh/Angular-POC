import { Component, OnInit } from '@angular/core';
import {ChildService} from "../../child.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  name: string = 'c1';

  constructor(private childService: ChildService) {
    this.childService.nameSubject.subscribe((newName: string) => {
      this.name = newName;
      console.log('child1', this.name);
    });
  }

  ngOnInit(): void {

  }

}
