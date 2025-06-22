import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  id: number;
  employee: User;
  constructor(private employeeservice: EmployeeService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.id=this.tokenService.getUser().id;
    this.employee=new User();
    this.employeeservice.getEmployeebyId(this.id).subscribe(data => {
      this.employee=data;
      console.log(data);
    },error => console.log(error))
  }

}
