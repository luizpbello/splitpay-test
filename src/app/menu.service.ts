import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems = [
    { name: 'Menu', icon: 'widgets', route: '/' },
    { name: 'Agenda', icon: 'calendar_today', route: '/agenda' },
    { name: 'Clientes', icon: 'groups', route: '/clientes' },
    { name: 'Financeiro', icon: 'payments', route: '/financeiro' },
    { name: 'Pendencias', icon: 'check', route: '/checklist' },
    { name: 'Relatórios', icon: 'report', route: '/relatorios' },
    { name: 'Recursos Humanos', icon: 'people', route: '/rh' },
    { name: 'Estoque', icon: 'inventory_2', route: '/estoque' },
    { name: 'Pastas', icon: 'folder_copy', route: '/pastas' },
    { name: 'Configurações', icon: 'settings', route: '/configuracoes' },
    { name: 'Ajuda', icon: 'help', route: '/ajuda' },
    { name: 'Sair', icon: 'exit_to_app', route: '/quit' },
  ];
}
