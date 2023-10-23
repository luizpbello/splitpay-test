import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent {

  tasksItems : any[]

  constructor(taskService:TasksService){
    this.tasksItems = taskService.tasksItems
  }

}
