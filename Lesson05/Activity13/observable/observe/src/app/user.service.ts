import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<boolean>(false);
  cast = this.user.asObservable();

  constructor() { }

  User(newUser) {
    this.user.next(newUser);
  }
}