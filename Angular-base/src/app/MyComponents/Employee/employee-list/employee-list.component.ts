import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css',]
})
export class EmployeeListComponent implements OnInit {
  
  employees: User[];

  constructor(private employeeservice: EmployeeService,private router: Router) { 
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeservice.getEmployeeList().subscribe(data => {
      console.log(data);
      this.employees=data;
    });
  }

  updateEmployee(id: Number) {
    this.router.navigate(['admin/update-employee',id]);
  }

  deleteEmployee(id: number) {
    this.employeeservice.deleteEmployee(id).subscribe(data => {
      console.log(id+"employeed Deleted.");
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['admin/emloyee-details',id]);
  }

}
