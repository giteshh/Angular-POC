import { Component, OnInit } from '@angular/core';
import {ChildService} from "../../child.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  name: string = 'c2';
  nameSubscription: Subscription;

  constructor(private childService: ChildService) {
    this.nameSubscription = this.childService.nameSubject.subscribe( data =>  this.onNameUpdate(data));
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void{
    if(this.nameSubscription){
      this.nameSubscription.unsubscribe();
    }
  }

  onNameUpdate(newName: string){
    this.name = newName;
  }
}
