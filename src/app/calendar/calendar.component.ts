import { Component } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timelinePlugin from '@fullcalendar/timeline';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timelineWeek,timelineMonth'
    },
    plugins: [dayGridPlugin, timelinePlugin],
  };
  medicos: string[];
  consultorios: string[];
  horarios: string[];
  consultas: any[];

  constructor(schedulingService: SchedulingService) {
    this.medicos = schedulingService.medicos;
    this.consultorios = schedulingService.consultorios;
    this.horarios = schedulingService.horarios;
    this.consultas = schedulingService.consultas;
  }
}
