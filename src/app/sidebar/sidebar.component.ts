import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  menuItems: any[];
  constructor(private menuService: MenuService) {
    this.menuItems = menuService.menuItems;
  }
}
