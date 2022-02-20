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
    return this._http.post('http://localhost:8000/vendor', _dealer);
  }

  getDealers() {
    return this._http.get('http://localhost:8000/vendor');
  }

  getDealerbyId(dealerId: string) {
    return this._http.get('http://localhost:8000/vendor/' + dealerId);
  }
}
