import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  jobsPage: any = {};
  page: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(event?: any): void {
    this.apiService.get("/jobs").subscribe((jobsPage: any) => this.jobsPage = jobsPage);
  }
}
