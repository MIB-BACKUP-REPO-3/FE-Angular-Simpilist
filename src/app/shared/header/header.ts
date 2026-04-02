import { AuthStorageService } from './../../core/services/auth-storage.service';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { createHeaderMenuConfig } from '../../core/configs/menu.config';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    private authStorageService: AuthStorageService,
    private router: Router,
  ) {}

  menu = computed(() => {
    const userType = this.authStorageService.getUserType();
    return createHeaderMenuConfig(this.authStorageService, this.router)[userType];
  });
}
