import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'splitpay-test';
  calendarOptions: CalendarOptions ={
    initialView: 'dayGridMonth',
    plugins:[dayGridPlugin]
  }
}
