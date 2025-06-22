import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { User } from 'src/app/Models/user';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: User = new User();
  id: number;
  
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeebyId(this.id).subscribe(data => {
      this.employee=data;
    },
    error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee,this.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['admin/employees']);
    },
    error => console.log(error));
  }

  gotoemployeelist() {
    this.router.navigate(['employees']);
  }


  onSubmit() {
    this.updateEmployee();
    //this.gotoemployeelist();
  }

}
