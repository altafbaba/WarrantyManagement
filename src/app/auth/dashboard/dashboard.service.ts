import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = environment.serverUrl;

  constructor(private _http: HttpClient) {}

  getDashboard() {
    return this._http.get(`${this.baseUrl}/dashboard`);
  }
}
