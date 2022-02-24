import { Injectable, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICustomer } from './customer.types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ICustomer } from './customer.types';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _serverUrl = environment.serverUrl;
  constructor(private _http: HttpClient) {}

  createCustomer(_customer: any) {
    let url = `${this._serverUrl}/warranty`;

    return this._http.post(url, _customer);
  }
  getCustomers() {
    let url = `${this._serverUrl}/vendor`;
    return this._http.get(url);
  }
  getCustomerbyId(customerId: string) {
    return this._http.get('http://localhost:8000/vendor/' + customerId);
  }
}
