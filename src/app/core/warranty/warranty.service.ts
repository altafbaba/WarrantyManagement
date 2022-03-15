import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarrantyService {
  private _serverUrl = environment.serverUrl;
  constructor(private _http: HttpClient) {}

  createWarranty(_warranty: any) {
    let url = `${this._serverUrl}/api/warranty`;
    return this._http.post(url, _warranty);
  }

  getWarranty() {
    let url = `${this._serverUrl}/api/warranty`;
    return this._http.get(url);
  }
  getWarrantybyId(warrantyId: string) {
    let url = `${this._serverUrl}/api/warranty/`;
    return this._http.get(url + warrantyId);
  }
}
