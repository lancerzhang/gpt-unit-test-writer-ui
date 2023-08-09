import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {

  constructor(private router: Router) { }

  onGenerateButtonClick(): void {
    // Logic to create a job goes here

    // After creating the job, navigate to the jobs-list page
    this.router.navigate(['/jobs-list']);
  }
}
