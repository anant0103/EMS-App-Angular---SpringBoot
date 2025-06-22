import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  public baseURL="http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) {}

  getBirthdayList(month: Number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL+"/birthdays/"+month);
  }

  getAnniversaryList(month: Number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL+"/work-anniversary/"+month);
  }

}
