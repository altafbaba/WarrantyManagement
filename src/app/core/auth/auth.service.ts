import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}

  signin(credential: any) {
    this._http
      .post('http://localhost:8000/auth/login', credential)
      .subscribe((response: any) => {
        this.storeAccessToken(response.data.accessToken);
        this._router.navigateByUrl('Dashboard');
      });
  }
  //access token store in localStorage
  private storeAccessToken(accessToken: string) {
    localStorage.setItem('loginToken', accessToken);
  }
  // get accessToken

  getAccessToken() {
    return localStorage.getItem('loginToken');

    //remove AccessToken
  }
  deleteAccessToken() {
    localStorage.removeItem('loginToken');
  }
  logout() {
    this.deleteAccessToken();
    this._router.navigateByUrl('auth/signin');
  }
}
