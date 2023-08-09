import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      // Handle error (e.g., navigate to a not-found page or show an error message)
      return;
    }
    const jobId = +id;

    // Use the jobId to fetch the job details from the service
    this.apiService.get(`/jobs/${jobId}`).subscribe((job: any) => this.job = job);
  }
}
