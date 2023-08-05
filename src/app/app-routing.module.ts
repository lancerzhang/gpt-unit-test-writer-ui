import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'create-job', component: CreateJobComponent },
  { path: 'jobs-list', component: JobsListComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: '', redirectTo: '/create-job', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
