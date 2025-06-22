import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: User;
  constructor(private route: ActivatedRoute,private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new User();
    this.employeeservice.getEmployeebyId(this.id).subscribe(data => {
      this.employee=data;
      console.log(data);
    },error => console.log(error))
  }

}
