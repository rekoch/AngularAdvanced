import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailHelperService {

  constructor() {
  }

  // would be a backend call -> for example an email validator api like https://mailboxlayer.com or own backend
  checkIsEmailValid(email: string): Observable<boolean> {
    console.log('email received: ' + email);
    return of(Math.round(Math.random() * 100) % 2 === 0)
  }
}
