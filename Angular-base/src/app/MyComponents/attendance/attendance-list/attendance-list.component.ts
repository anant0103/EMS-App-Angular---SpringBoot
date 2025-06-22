import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/app/Models/attendance';
import { AttendanceService } from 'src/app/Services/APIService/attendance.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  attendanceList: Attendance[];

  constructor(private attendanceService: AttendanceService,private tokenService: TokenService) { 
  }

  ngOnInit(): void {
    this.getAttendanceList();
  }

  private getAttendanceList() {
    const user=this.tokenService.getUser();
    this.attendanceService.getAttendanceByUserId(user.id).subscribe(data => {
      this.attendanceList=data;
    });
  }

}
