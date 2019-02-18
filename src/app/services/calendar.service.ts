import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarUrl = 'http://localhost:55325/api/calendar';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.calendarUrl)
      .pipe(
        catchError(this.handleError('getEvents', []))
      );
  }

  getEvent(id: number): Observable<Event> {
    const url = `${this.calendarUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

