import { RegisterRequest } from '../types/auth.types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginRequest, LoginResponse } from '../types/auth.types';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, loginRequest);
  }

  register(registerRequest: RegisterRequest) {
    return this.http.post(`${environment.apiBaseUrl}/auth/register`, registerRequest);
  }
}
