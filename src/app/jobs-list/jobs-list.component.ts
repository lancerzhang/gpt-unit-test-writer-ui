import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  jobs = [
    // Example data; replace with your actual job data
    { title: 'Software Engineer', description: 'Build amazing things!' },
    { title: 'Product Manager', description: 'Lead the product to success.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch your jobs data here
  }

}
