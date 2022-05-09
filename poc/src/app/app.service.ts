import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  subject = new BehaviorSubject('');

  constructor() {
  }

  addItems<T>(data: any) {
    this.subject.next(data);
  }

  getItems<T>(): Observable<any> {
    return this.subject.asObservable();
  }


}
