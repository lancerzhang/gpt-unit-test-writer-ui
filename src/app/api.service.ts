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


  get(path: string, page: number) {
    this.scheduleLogout();

    if (environment.production) {
      // make an HTTP request
      const url = `${environment.apiBase}${path}`;

      return this.http.get(url);

    } else {
      const jsonFilePath = 'assets/dummy/jobs.json';
      // read the dummy data from local file
      return this.http.get(jsonFilePath);
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
