import { AuthStorageService } from '../../../core/services/auth-storage.service';
import { MenuItem } from '../../../core/model/menu.model';
import { HeaderUi } from '../../../shared/components/header-ui/header-ui';
import { Component, computed } from '@angular/core';
import { createHeaderMenuConfig } from './menu.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [HeaderUi],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private authStorageService: AuthStorageService,
    private router: Router
  ) {}

  menu = computed(() => {
    const userType = this.authStorageService.getUserType();
    return createHeaderMenuConfig(this.authStorageService, this.router)[userType];
  });

  handleClick(item: MenuItem) {
    if (item.action) {
      item.action();
      return;
    }

    if (item.link) {
      this.router.navigate([item.link]);
    }
  }
}
