import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {path:'depatrment',component:DepartmentComponent},
  {path:'employee',component:EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent=[DepartmentComponent,EmployeelistComponent]
