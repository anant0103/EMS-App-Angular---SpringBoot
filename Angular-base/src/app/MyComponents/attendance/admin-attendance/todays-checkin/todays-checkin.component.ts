import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/app/Models/attendance';
import { User } from 'src/app/Models/user';
import { AttendanceService } from 'src/app/Services/APIService/attendance.service';
import { EmployeeService } from 'src/app/Services/APIService/employee.service';

@Component({
  selector: 'app-todays-checkin',
  templateUrl: './todays-checkin.component.html',
  styleUrls: ['./todays-checkin.component.css']
})
export class TodaysCheckinComponent implements OnInit {

  date:string;
  signinAttendance: Attendance[];
  employees: User[];
  showdata = false;

  signInData: { id:number, name:string, time: string}[] = [];

  constructor(private attendanceService:AttendanceService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.date = new Date().toISOString().split('T')[0];
    this.loadSignInData();
  }

  loadSignInData() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
      console.log(data);
      this.attendanceService.getAttendanceforCheckin(this.date).subscribe((data2) => {
        this.signinAttendance = data2;
        for (const signInOb of this.signinAttendance) {
          let emp = this.employees.find((data) => data.idLong == signInOb.userid);
          const ob = { id:signInOb.userid, name: emp.fname+" "+emp.lname, time: signInOb.intime }
          this.signInData.push(ob);
          this.employees = this.employees.filter((ob) => ob.idLong!=signInOb.userid);
        }
        this.showdata = true;
      })
    })
  }

}
