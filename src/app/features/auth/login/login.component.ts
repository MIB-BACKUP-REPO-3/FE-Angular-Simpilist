import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRequest, LoginResponse } from '../types/auth.types';
import { AuthStorageService } from '../../../core/services/auth-storage.service';
import { ErrorResponse } from '../../../core/model/error-response.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { logAndNotifyError } from '../../../core/utilities/utilities';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }
  public set form(value: FormGroup) {
    this._form = value;
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authStorageService: AuthStorageService,
    private notificationService: NotificationService,
  ) {
    this._form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this._form.get('email');
  }

  get password() {
    return this._form.get('password');
  }

  login() {
    const data: LoginRequest = this._form.value;
    if (this._form.invalid) {
      this.notificationService.showWarningNotification('Invalid Form Data');
      return;
    }
    this.authService.login(data).subscribe({
      next: (res: LoginResponse) => {
        this.authStorageService.setAuthentication(res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        logAndNotifyError(err,this.notificationService)
      },
    });
  }
  redirectRegister() {
    this.router.navigate(['/register']);
  }
}
