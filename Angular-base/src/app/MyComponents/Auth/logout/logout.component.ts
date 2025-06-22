import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit(): void {
    this.tokenService.signOut();
    console.log("LogOut Successfully");
    this.router.navigate(['login']);
  }

}
