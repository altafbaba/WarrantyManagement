import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  private _serverUrl = environment.serverUrl;
  constructor(private _http: HttpClient, private _route: Router) {}

  createDealer(_dealer: any) {
    let url = `${this._serverUrl}/dealer`;
    return this._http.post(url, _dealer);
  }

  getDealers() {
    let url = `${this._serverUrl}/warranty`;
    return this._http.get(url);
  }

  getDealerbyId(dealerId: string) {
    let url = `${this._serverUrl}/warranty/`;
    return this._http.get(url + dealerId);
  }
}
