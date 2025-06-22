import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './MyComponents/Employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './MyComponents/Employee/employee-list/employee-list.component';
import { LoginComponent } from './MyComponents/Auth/login/login.component';
import { LogoutComponent } from './MyComponents/Auth/logout/logout.component';
import { UpdateEmployeeComponent } from './MyComponents/Employee/update-employee/update-employee.component';
import { AuthGuardService } from './Services/Guard/auth-guard.service';
import { SignupComponent } from './MyComponents/Auth/signup/signup.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ProfileDetailsComponent } from './MyComponents/Employee/profile/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './MyComponents/Employee/profile/profile-update/profile-update.component';
import { NotAuthorizePageComponent } from './MyComponents/Error/not-authorize-page/not-authorize-page.component';
import { ErrorPageComponent } from './MyComponents/Error/error-page/error-page.component';
import { AttendanceListComponent } from './MyComponents/attendance/attendance-list/attendance-list.component';
import { AdminAttendanceComponent } from './MyComponents/attendance/admin-attendance/admin-attendance.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'admin', canActivate: [AuthGuardService], data: { role: 'ROLE_ADMIN' } ,
    children: [
      { path: 'employees', component: EmployeeListComponent },
      { path: 'update-employee/:id', component: UpdateEmployeeComponent },
      { path: 'emloyee-details/:id', component: EmployeeDetailsComponent },
      { path: 'attendance', component: AdminAttendanceComponent },
    ]
  },
  { path: 'profile-details', component: ProfileDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'profile-update', component: ProfileUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'attendance-sheet', component: AttendanceListComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-authorize', component: NotAuthorizePageComponent },
  { path: '**', component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
