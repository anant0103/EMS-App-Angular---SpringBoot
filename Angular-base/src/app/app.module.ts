import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './MyComponents/Employee/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './MyComponents/Employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './MyComponents/Employee/employee-details/employee-details.component';
import { LoginComponent } from './MyComponents/Auth/login/login.component';
import { BasicAuthInterceptorService } from './Services/Interceptor/basic-auth-interceptor.service';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LogoutComponent } from './MyComponents/Auth/logout/logout.component';
import { SignupComponent } from './MyComponents/Auth/signup/signup.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { ProfileUpdateComponent } from './MyComponents/Employee/profile/profile-update/profile-update.component';
import { ProfileDetailsComponent } from './MyComponents/Employee/profile/profile-details/profile-details.component';
import { ErrorPageComponent } from './MyComponents/Error/error-page/error-page.component';
import { NotAuthorizePageComponent } from './MyComponents/Error/not-authorize-page/not-authorize-page.component';
import { BirthdayComponent } from './MyComponents/home/birthday/birthday.component';
import { WorkAnniversaryComponent } from './MyComponents/home/work-anniversary/work-anniversary.component';
import { AttendanceCardComponent } from './MyComponents/attendance/attendance-card/attendance-card.component';
import { AttendanceGraphComponent } from './MyComponents/attendance/attendance-graph/attendance-graph.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { AttendanceListComponent } from './MyComponents/attendance/attendance-list/attendance-list.component';
import { TodaysCheckinComponent } from './MyComponents/attendance/admin-attendance/todays-checkin/todays-checkin.component';
import { UserAttendanceComponent } from './MyComponents/attendance/admin-attendance/user-attendance/user-attendance.component';
import { AdminAttendanceComponent } from './MyComponents/attendance/admin-attendance/admin-attendance.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    ProfileUpdateComponent,
    ProfileDetailsComponent,
    ErrorPageComponent,
    NotAuthorizePageComponent,
    BirthdayComponent,
    WorkAnniversaryComponent,
    AttendanceCardComponent,
    AttendanceGraphComponent,
    CanvasJSChart,
    AttendanceListComponent,
    TodaysCheckinComponent,
    UserAttendanceComponent,
    AdminAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptorService,
      multi: true
    },
    CookieService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
