import { Injectable, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICustomer } from './customer.types';
// import { ICustomer } from './customer.types';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _serverUrl = environment.serverUrl;
  constructor() {}

  getCustomers() {
    let x: ICustomer = {
      name: '',
      email: '',
      address: '',
      mobile: '',
      state: '',
      city: '',
      zip: '',
    };

    return x;
  }

  createCustomer() {
    let url = `${this._serverUrl}/customer`;
  }
}
