import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  githubRepo: string = '';
  branch: string = '';
  jobType: string = 'COVERAGE'; // default value or whatever you want

  constructor(private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Loading values from local storage code here...
    this.githubRepo = localStorage.getItem('githubRepo') || '';
    this.branch = localStorage.getItem('branch') || 'master';
  }

  onGenerateButtonClick(): void {
    const dataToSubmit = {
      githubRepo: this.githubRepo,
      branch: this.branch,
      jobType: this.jobType
    };

    this.apiService.post(`/jobs/`, dataToSubmit).subscribe((job: any) => {
      // Handle the server response if needed

      // Save to local storage
      localStorage.setItem('githubRepo', this.githubRepo);
      localStorage.setItem('branch', this.branch);

      // Redirect to the jobs-list page
      this.router.navigate(['/jobs-list']);
    }, error => {
      // Handle errors here
      console.error('Error submitting data:', error);
    });

  }
}
