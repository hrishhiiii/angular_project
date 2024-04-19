import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmntComponent } from './cmnt/cmnt.component';
import { CounterComponent } from './counter/counter.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    CmntComponent,
    CounterComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
