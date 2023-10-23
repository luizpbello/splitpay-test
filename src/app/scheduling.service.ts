import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  medicos: string[] = ['Médico 1', 'Médico 2', 'Médico 3'];
  consultorios: string[] = ['Consultório 1', 'Consultório 2', 'Consultório 3'];
  horarios: string[] = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];

  consultas: any[] = [
    {
      medico: 'Médico 1',
      consultorio: 'Consultório 1',
      horario: '08:00',
      paciente: 'Paciente 1',
    },
  ];
}
