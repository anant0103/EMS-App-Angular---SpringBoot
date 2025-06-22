import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseURL="http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL).pipe(
      map(employees => {
        for(let employee of employees) {
          employee.bdate = new Date(employee.bdate);
          employee.jdate = new Date(employee.jdate);
        }
        console.log("Employees Service: GetEmployee() called");
        return employees;
      }));
  }

  getEmployeebyId(id: Number): Observable<User> {
    console.log("Employees Service: GetEmployeeById() called");
    return this.httpClient.get<User>(this.baseURL+"/"+id);
  }

  updateEmployee(employee: User,id: number): Observable<Object> {
    console.log("Employees Service: UpdateEmployee() called");
    console.log(employee);
    return this.httpClient.put(this.baseURL+"/"+id,employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    console.log("Employees Service: DeleteEmployee() called");
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

}
