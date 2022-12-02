import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

export interface IItem {
  description: string;
  count: number;
}

@Injectable()
export class TimeService {
  constructor(private http: HttpClient) { }

  getStartTime(timeUrl: string): Observable<object> {
    return this.http.get<Date>(timeUrl, httpOptions);
  }

  postEndTime(timeUrl: string, time: Date): void {
    this.http.post<Date>(timeUrl, time.toString());
  }
}
