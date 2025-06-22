import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUser } from 'src/app/Models/loggedUser';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  private BASE_URL: string = "http://localhost:8080/api/auth/";

  contentHeader = new HttpHeaders({ "Content-Type":"application/json" });

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(this.BASE_URL + 'signin', {
      email,
      password
    },  { headers: this.contentHeader });
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL + 'signup',user, { headers: this.contentHeader});
  }
}
