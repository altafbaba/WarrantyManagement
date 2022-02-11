import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WarrantyService {
  constructor(private _http: HttpClient) {}

  createWarranty(_warranty: any) {
    this._http
      .post('http://localhost:8000/vendor', _warranty)
      .subscribe((Response) => {
        console.log(Response);
      });
  }
}