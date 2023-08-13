import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  openaiConfig: any;

  private logoutTimer: any;

  constructor(private http: HttpClient) {
    this.scheduleLogout();
  }


  get(path: string) {
    this.scheduleLogout();

    if (environment.useDummy) {
      const jobFilePath = 'assets/dummy/job.json';
      const jobsFilePath = 'assets/dummy/jobs.json';
      // read the dummy data from local file
      if (path.startsWith("/jobs/")) {
        return this.http.get(jobFilePath);
      } else {
        return this.http.get(jobsFilePath);
      }
    } else {
      const url = `${environment.apiBase}${path}`;
      return this.http.get(url);
    }
  }

  post(path: string, body: any) {
    this.scheduleLogout();

    if (environment.useDummy) {
      const jobFilePath = 'assets/dummy/job.json';
      // read the dummy data from local file
      return this.http.get(jobFilePath);
    } else {
      const url = `${environment.apiBase}${path}`;
      return this.http.post(url, body);
    }
  }

  scheduleLogout() {
    // clear any existing timer
    if (this.logoutTimer) {
      this.logoutTimer.unsubscribe();
    }

    // schedule new timer
    this.logoutTimer = timer(25 * 60 * 1000)  // 25 minutes
      .pipe(take(1))  // take once
      .subscribe(() => {
        this.logout();
      });
  }

  logout() {
    // call your logout URL here
    window.location.href = `./logout`;
  }
}
