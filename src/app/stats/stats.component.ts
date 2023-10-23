import { Component } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent {
  statsItems:any[]
    constructor(statsService:StatsService){
      this.statsItems = statsService.statsItems
    }

}
