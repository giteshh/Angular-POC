import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('g');

  updateName(newName: string){
    this.nameSubject.next(newName);
  }


}
