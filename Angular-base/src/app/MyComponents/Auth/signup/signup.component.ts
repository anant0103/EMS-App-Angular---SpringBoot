import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
   
  }

  gotoemployeelist() {
    this.router.navigate(['employees']);
  }

  onSubmit() {
     this.tokenService.signUp(this.user).subscribe({next: data => {
      console.log("Sign Up Success");
      this.router.navigate(['login'], { queryParams: { signup: 'success' }});
     },
     error: (e) => {
      console.log(e);
     }
    })
  }


}
