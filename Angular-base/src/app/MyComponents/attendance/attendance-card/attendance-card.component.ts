import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AttendanceIn, AttendanceOut, Attendance } from 'src/app/Models/attendance';
import { AttendanceService } from 'src/app/Services/APIService/attendance.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-attendance-card',
  templateUrl: './attendance-card.component.html',
  styleUrls: ['./attendance-card.component.css']
})
export class AttendanceCardComponent implements OnInit, OnChanges {

  @Input() id: Number;
  date: String;
  attendanceIn: Attendance = null;
  attendanceOut: Attendance = null;

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.date = new Date().toISOString().split('T')[0];
    this.getTodayAttendance();
  }

  ngOnChanges(): void {
      this.ngOnInit();
  }

  getTodayAttendance() {
    this.attendanceIn=null;
    this.attendanceOut=null;
    this.attendanceService.getAttendanceforUserByDate(this.id, this.date).subscribe((data) => {
      for (const attendance of data) {
        if (attendance.intime == null)
          this.attendanceOut = attendance;
        else
          this.attendanceIn = attendance;
      }
    })
  }

  checkIn() {
    if (this.attendanceIn == null) {
      this.date = new Date().toISOString().split('T')[0];
      let time = new Date().toISOString();
      const attob = new AttendanceIn(this.date, time, this.id);
      this.attendanceService.saveAttendance(attob).subscribe({
        next: (data) => {
          console.log("Checkd In successfully");
          this.getTodayAttendance();
        },
        error: e => console.log(e)
      })
    }
  }

  checkOut() {
    if (this.attendanceOut == null) {
      this.date = new Date().toISOString().split('T')[0];
      let time = new Date().toISOString();
      const attob = new AttendanceOut(this.date, time, this.id);
      this.attendanceService.saveAttendance(attob).subscribe({
        next: (data) => {
          console.log("Check Out Successfully");
          this.getTodayAttendance();
          this.attendanceService.attendanceAdded.next(null);
        },
        error: e => console.log(e)
      })
    }
  }

}
