import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {CalendarDay} from './calendar-day';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<CalendarDay[]> {
    return this.http.get<CalendarDay[]>(this.calendarUrl)
      .pipe(
        catchError(this.handleError('getEvents', []))
      );
  }

  getEvent(id: number): Observable<CalendarDay> {
    const url = `${this.calendarUrl}/${id}`;
    return this.http.get<CalendarDay>(url).pipe(
      catchError(this.handleError<CalendarDay>(`getEvent id=${id}`))
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

