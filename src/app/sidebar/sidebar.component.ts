import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  menuItems: any[];
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menuItems = menuService.menuItems;
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
