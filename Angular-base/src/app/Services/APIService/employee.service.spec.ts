import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let baseURL="http://localhost:8080/api/v1/employees";
  let httpTestingController: HttpTestingController;

  const testData: Employee[]= [
    {
      "id":1,
      "email":"anant@gmail.com",
      "password":"anant123",
      "fname":"Anant",
      "lname":"Doshi",
      "gender":"MALE",
      "address":"A-302,Tulsi Apartment,Krishnagar,Ahmedabad",
      "phoneno":9825145802,
      "designation":"Programmer Analyst",
      "bdate":new Date("2001-02-28"),
      "jdate":new Date("2022-01-02")
    },
    {
      "id": 2,
      "email": "shubh@gmail.com",
      "password": "shubh@123",
      "fname": "Shubham",
      "lname": "Patel",
      "gender": "MALE",
      "address": "5-K, GHnshyam Society, Near YkLaxmi school, Kapodara, Surat",
      "phoneno": 1234567890,
      "designation": "Programmer Analyst",
      "bdate":new Date("2000-08-16"),
      "jdate":new Date("2022-01-02")
    }
  ];

  const testData1: Employee= 
    {
      id:1,
      email:"anant@gmail.com",
      password:"anant123",
      fname:"Anant",
      lname:"Doshi",
      gender:"MALE",
      address:"A-302,Tulsi Apartment,Krishnagar,Ahmedabad",
      phoneno:9825145802,
      designation:"Programmer Analyst",
      bdate:new Date("2001-02-28"),
      jdate:new Date("2022-01-02")
    } 

    const testData2: Employee= 
    {
      id:1,
      email:"anant@gmail.com",
      password:"anant123",
      fname:"Viraj",
      lname:"Doshi",
      gender:"MALE",
      address:"A-302,Tulsi Apartment,Krishnagar,Ahmedabad",
      phoneno:9825145802,
      designation:"Programmer Analyst",
      bdate:new Date("2001-02-28"),
      jdate:new Date("2022-01-02")
    } 


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
      ],
      imports : [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => { 
    httpTestingController.verify(); 
   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getEmployeeList Test: GET HTTP request and return all data items', () => {
    service.getEmployeeList().subscribe(res => {
      expect(res).toEqual(testData); 
      expect(res.length).toBe(2);
     }); 
    const req = httpTestingController.expectOne(baseURL);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(testData);
    httpTestingController.verify();
   });


   it('getEmployeebyId Test: GET HTTP request with id appended to end of url', () => {
    service.getEmployeebyId(1).subscribe(res => {
      expect(res).toEqual(testData1); 
     }); 
    const req = httpTestingController.expectOne(baseURL+'/1');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(testData1);
    httpTestingController.verify();
   });


   it('createEmployee Test: POST HTTP request with resource as body', () => {
    service.createEmployee(testData1).subscribe(res => {
      expect(res['fname']).toBe('Anant');
     }); 
    const req = httpTestingController.expectOne(baseURL);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(testData1);
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(testData1);
    httpTestingController.verify();
    });


    it('updateEmployee Test: PUT HTTP request with id appended to end of url and resource as body', () => {
      service.updateEmployee(testData2, 1).subscribe(res => {
        expect(res['fname']).toBe('Viraj'); 
       }); 
      const req = httpTestingController.expectOne(baseURL+'/1');
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(testData2);
      expect(req.cancelled).toBeFalsy(); 
      expect(req.request.responseType).toEqual('json');
      req.flush(testData2);
      httpTestingController.verify();
     });
     

     it('deleteEmployee Test: DELETE HTTP request with id appended to end of url', () => {
      service.deleteEmployee(1).subscribe(res => {
        expect(res).toBe(1); 
       }); 
      const req = httpTestingController.expectOne(baseURL+'/1');
      expect(req.request.method).toBe('DELETE');
      expect(req.cancelled).toBeFalsy(); 
      expect(req.request.responseType).toEqual('json');
      req.flush(1);
      httpTestingController.verify();
     });


});
