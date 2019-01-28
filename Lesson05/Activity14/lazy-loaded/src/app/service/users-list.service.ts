import { Injectable } from '@angular/core';
import { Users } from "../model/users.model";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersListService {
  dataurl = "http://localhost:3000/results";
  constructor(private http: HttpClient) { }

  
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.dataurl);
  }


  public getUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.dataurl}?id=${id}`);
  }

}
