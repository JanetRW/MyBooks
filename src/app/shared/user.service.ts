import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = "https:localhost:3000";

  constructor(private http: HttpClient) {}

  public getUser(id_user:number){
    return this.http.get(this.url)
}
  public postUser(newUser: User){
    return this.http.post(this.url, newUser)
  }
}