import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import { AuthAPIService } from './auth-api.service';
import { CookieService } from 'ngx-cookie-service';
import { LoggedUser } from 'src/app/Models/loggedUser';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isUserLoggdIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authApiService: AuthAPIService, private cookieService: CookieService) { }

  signOut(): void {
    this.cookieService.deleteAll();
    this.isUserLoggdIn.next(false);
    this.isAdmin.next(false);
  }

  signIn(email: string, password: string): Observable<LoggedUser> {
    return this.authApiService.login(email, password);
  }

  signUp(user: User): Observable<User> {
    return this.authApiService.register(user);
  }

  setSignInData(loggedUser: LoggedUser) {
    this.cookieService.delete('token');
    this.cookieService.set('token', loggedUser.token);
    this.cookieService.delete('user');
    this.cookieService.set('user', JSON.stringify(loggedUser));
    this.isUserLoggdIn.next(true);
    this.isAdmin.next(loggedUser.roles.includes("ROLE_ADMIN"));
  }

  setloadUpData() {
    if(this.isUserLoggedIn()) {
      this.isUserLoggdIn.next(true);
      const user : LoggedUser = JSON.parse(this.cookieService.get('user'));
      this.isAdmin.next(user.roles.includes("ROLE_ADMIN"));
    }
  }

  public getToken(): string | null {
    return this.cookieService.get('token');
  }

  public getUser(): any {
    if (this.isUserLoggedIn()) {
      return JSON.parse(this.cookieService.get('user'));
    }
    return {};
  }

  isUserLoggedIn() {
    return this.cookieService.check('token');
  }

}
