import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  signin(credential: any) {
    this._http
      .post('http://192.168.1.103:8000', credential)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
