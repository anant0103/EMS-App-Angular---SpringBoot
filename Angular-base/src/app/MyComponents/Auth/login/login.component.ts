import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggedUser } from 'src/app/Models/loggedUser';
import { User } from 'src/app/Models/user';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string = "Invalid Credentials";
  successMessage: String;
  invalidLogin: boolean = false;
  loginSuccess: boolean = false;
  signupSuccess: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      console.log(data['Signup']);
      if(data['signup']=='success') {
        this.successMessage = "SignUp Successful now login with your Credentials";
        this.signupSuccess = true;
      }
    })
  }

  handleLogin() {
    this.tokenService.signIn(this.email, this.password).subscribe({
      next: data => {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = "Login Successful";
        this.tokenService.setSignInData(data);
        this.router.navigate(['']);
      },
      error: () => {
        console.log(this.errorMessage);
        this.invalidLogin = true;
        this.loginSuccess = false;
      }
    });
  }

}
