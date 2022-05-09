import { Component, OnInit } from '@angular/core';
import {ChildService} from "../../child.service";

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor(private cs: ChildService) { }

  ngOnInit(): void {
  }

  updateName($event: any) {
    this.cs.updateName($event.target.value);
    // this.cs.nameSubject.next($event.target.value);
  }
}
