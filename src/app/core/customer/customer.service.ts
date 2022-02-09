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

  // getCustomers() {
  //   let x: ICustomer = {
  //     name: '',
  //     email: '',
  //     address: '',
  //     mobile: '',
  //     state: '',
  //     city: '',
  //     zip: '',
  //   };

  //   return x;
  // }

  createCustomer(_customer: any) {
    let url = `${this._serverUrl}/vendor`;

    this._http.post(url, _customer).subscribe((res) => {
      console.log(res);
    });
  }
  getCustomers() {
    let url = `${this._serverUrl}/vendor`;
    return this._http.get(url);
  }
}
