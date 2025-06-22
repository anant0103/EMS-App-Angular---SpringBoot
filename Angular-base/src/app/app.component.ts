import { Component, OnInit } from '@angular/core';
import { TokenService } from './Services/AuthService/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Management System';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.setloadUpData();
  }

   
}

