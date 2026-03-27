import { USER_TYPES } from './../constants/constants';
import { Injectable, signal } from '@angular/core';
import { CurrentUser, LoginResponse } from '../../features/auth/types/auth.types';
import { STORAGE_KEYS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  private _accessToken = signal<string | null>(null);

  public get accessToken(): string | null {
    return this._accessToken();
  }

  private _refreshToken = signal<string | null>(null);

  public get refreshToken(): string | null {
    return this._refreshToken();
  }

  private _currentUser = signal<CurrentUser | null>(null);

  public get currentUser(): CurrentUser | null {
    return this._currentUser();
  }

  public getUserType(): (typeof USER_TYPES)[keyof typeof USER_TYPES] {
    if (this._accessToken()) {
      //todo add admin if jwt is of such
      return USER_TYPES.USER;
    } else {
      return USER_TYPES.GUEST;
    }
  }

  constructor() {
    this._accessToken.set(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN));
    this._refreshToken.set(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN));
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    try {
      this._currentUser.set(user ? JSON.parse(user) : null);
    } catch {
      this._currentUser.set(null);
    }
  }

  setAuthentication(data: LoginResponse) {
    this._accessToken.set(data.accessToken);
    this._refreshToken.set(data.refreshToken);
    this._currentUser.set(data.user);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(data.user));
  }

  clearAuthentication() {
    this._accessToken.set(null);
    this._refreshToken.set(null);
    this._currentUser.set(null);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }

  logout() {
    this.clearAuthentication();
  }
}
