import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user = {
    // Example data; replace with your actual user data
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch your user info data here
  }

}
