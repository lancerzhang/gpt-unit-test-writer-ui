import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    JobsListComponent,
    UserInfoComponent,
    NavbarComponent,
    JobDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
