import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginResponse, RegisterRequest } from '../types/auth.types';
import { AuthStorageService } from '../../../core/services/auth-storage.service';
import { ErrorResponse } from '../../../shared/types/shared.types';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }
  public set form(value: FormGroup) {
    this._form = value;
  }

  constructor(
    private auth: Auth,
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
    const data: RegisterRequest = this._form.value;
    if (this._form.invalid) {
      this.notificationService.showWarningNotification('Invalid Form Data');
      return;
    }
    this.auth.login(data).subscribe({
      next: (res: LoginResponse) => {
        this.authStorageService.setAuthentication(res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        const error: ErrorResponse = err.error;
        this.notificationService.showErrorNotification(error);
      },
    });
  }
  redirectRegister() {
    this.router.navigate(['/register']);
  }
}
