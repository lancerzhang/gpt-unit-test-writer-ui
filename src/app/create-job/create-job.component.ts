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

  alertType = 'danger'; // 'danger' for error messages
  errorMessage: string | null = null; // Stores the error message to display

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
      if (error.status === 403) {
        this.errorMessage = 'Error: User has insufficient budget.';
      } else if (error.status === 409) {
        this.errorMessage = 'Error: A job with the given criteria is already in progress or not started.';
      } else {
        this.errorMessage = 'Unexpected error occurred. Please try again.';
        console.error('Error submitting data:', error);
      }
    });
  }

  // This function will be triggered when the alert is closed
  onClosed(): void {
    this.errorMessage = null;
  }


}
