import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  statsItems = [
    { name: 'Funcionários', icon: 'group', number: 13 },
    { name: 'Avaliações', icon: 'star_rate', number: 13 },
    { name: 'Clientes', icon: 'receipt_long', number: 13 },
    { name: 'Exames', icon: 'emergency', number: 13 },
  ];
}
