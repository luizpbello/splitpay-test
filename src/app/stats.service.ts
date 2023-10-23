import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  statsItems = [
    { name: 'Funcionários', icon: 'group', number: 13 },
    { name: 'Clientes', icon: 'group', number: 13 },
    { name: 'Avaliações', icon: 'group', number: 13 },
    { name: 'Exames', icon: 'group', number: 13 },
  ];
}
