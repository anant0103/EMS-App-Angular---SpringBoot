import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import { Attendance, AttendanceIn, AttendanceOut } from 'src/app/Models/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendanceAdded: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public baseURL="http://localhost:8080/api/v1/attendance";

  constructor(private httpClient: HttpClient) {}

  // get attendance for particular user
  getAttendanceByUserId(id: Number): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.baseURL+"/"+id);
  }

  // get attendance for particular date
  getAttendanceByDate(date: String): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.baseURL+"/"+date);
  }

  // add attendance
  saveAttendance(attendance: AttendanceIn | AttendanceOut): Observable<Attendance> {
    return this.httpClient.post<Attendance>(this.baseURL,attendance);
  }

  // get attendance for particular user for particular month
  getAttendanceforUserByMonth(id:Number, month:Number): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.baseURL+"/"+id+"/"+month);
  }

  // get attendance for particular user for particular day
  getAttendanceforUserByDate(id:Number, date:String): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.baseURL+"-day/"+id+"/"+date);
  }

  getAttendanceforCheckin(date: string): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.baseURL+"-checkin/"+date);
  }

}
