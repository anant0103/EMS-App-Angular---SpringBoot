import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../AuthService/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private tokenService: TokenService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.checkUserLogin(route);
  }

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    if (this.tokenService.isUserLoggedIn()) {
      const userRole = this.tokenService.getUser().roles;
      if (route.data['role'] && userRole.indexOf(route.data['role']) === -1) {
        console.log("You are Not Authorized");
        this.router.navigate(['not-authorize']);
        return false;
      }
      return true;
    }
    console.log("Not Logged in redirect to login");
    this.router.navigate(['login']);
    return false;
  }


}
