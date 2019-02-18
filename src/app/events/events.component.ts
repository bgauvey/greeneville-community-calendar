import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { Event } from '../services/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.calendarService.getEvents()
      .subscribe(events => this.events = events);
  }

}
