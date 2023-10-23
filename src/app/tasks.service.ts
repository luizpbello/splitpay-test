import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksItems = [
    { task: 'Comprar carro', date: '11/10/23', time:"10:00", color:"#FF9187"},
    { task: 'Levar telefone', date: '12/10/23', time: "11:00", color:"#84A1F8" },
    { task: 'Comprar moto', date: '13/10/23', time: "12:00", color:"#00C3A5" },
  ];
}
