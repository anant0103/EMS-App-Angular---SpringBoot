import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.css']
})
export class UserAttendanceComponent implements OnInit {

  employees: User[] = [];
  selectedId : number;
  presentChart= false;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
      this.selectedId = this.employees[0].idLong;
      this.onChangeId(this.selectedId);
    })
  }

  onChangeId(id) {
    this.presentChart =false;
    this.selectedId= id;
    console.log("Id changed: ",this.selectedId);
    this.presentChart = true;
  }

}
