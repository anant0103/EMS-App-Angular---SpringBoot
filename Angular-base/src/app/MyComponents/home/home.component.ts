import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/Models/loggedUser';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  loggedUser: LoggedUser = null;

  constructor(private tokenService: TokenService) { 
  }

  ngOnInit(): void {
    this.loggedUser = this.tokenService.getUser();
    this.id=this.loggedUser.id;
  }

}
