import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { CalendarDay } from '../services/calendar-day';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  days: CalendarDay[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.calendarService.getEvents()
      .subscribe(days => {
        console.log(days);
        this.days = days;
      });
  }

}
