import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signgroup: FormGroup = new FormGroup({
    email: new FormControl('admin@admin.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('Test@12345', [Validators.required]),
  });

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this._authService.signin(this.signgroup.value);
  }
}
