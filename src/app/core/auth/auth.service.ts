import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  signin(credential: any) {
    this._http
      .post('http://localhost:8000/auth/login', credential)
      .subscribe((response: any) => {
        this.storeAccessToken(response.data.accessToken);
      });
  }
  private storeAccessToken(accessToken: string) {
    localStorage.setItem('loginToken', accessToken);
  }
}
