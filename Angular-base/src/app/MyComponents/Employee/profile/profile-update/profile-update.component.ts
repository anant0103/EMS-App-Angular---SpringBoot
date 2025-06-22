import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  employee: User = new User();
  id: number;
  
  constructor(private employeeService: EmployeeService,private router: Router,private tokenService: TokenService) {  }

  ngOnInit(): void {
    this.id=this.tokenService.getUser().id;
    this.employeeService.getEmployeebyId(this.id).subscribe(data => {
      this.employee=data;
    },
    error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee,this.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    },
    error => console.log(error));
  }

  gotoemployeelist() {
    this.router.navigate(['']);
  }


  onSubmit() {
    this.updateEmployee();
  }

}
