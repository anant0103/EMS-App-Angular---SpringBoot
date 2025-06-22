import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedin: boolean = false;

  constructor(public tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokenService.isUserLoggdIn.subscribe({
      next: isLoggedin => {
        this.isLoggedin = isLoggedin;
        console.log("isLoggedin: ",isLoggedin);
        if (isLoggedin) {
          this.tokenService.isAdmin.subscribe({ next: isAdmin => this.isAdmin = isAdmin })
        }
      }
    })
  }

}
