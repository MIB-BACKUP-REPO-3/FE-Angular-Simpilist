import { NotificationService } from '../../../core/services/notification.service';
import { Component } from '@angular/core';
import { RegisterRequest } from '../types/auth.types';
import { Auth } from '../services/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../../core/model/error-response.model';
import { NOTIFICATION_CONFIG } from '../../../core/constants/constants';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

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
    private notificationService:NotificationService
  ) {
    this._form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get firstName() {
    return this._form.get('firstName');
  }
  get lastName() {
    return this._form.get('lastName');
  }
  get phoneCode() {
    return this._form.get('phoneCode');
  }
  get phoneNumber() {
    return this._form.get('phoneNumber');
  }
  get email() {
    return this._form.get('email');
  }
  get password() {
    return this._form.get('password');
  }

  register() {
    const data: RegisterRequest = this._form.value;
    if (this._form.invalid) {
      this.notificationService.showWarningNotification('Invalid Form Data');
      return;
    }
    this.auth.register(data).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
        this.notificationService.showInfoNotification(NOTIFICATION_CONFIG.SUCCESSFUL_REGISTRATION)
      },
      error: (err) => {
        const error: ErrorResponse = err.error;
        this.notificationService.showErrorNotification(error)
      },
    });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
