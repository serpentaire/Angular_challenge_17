import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
constructor(public http: HttpClient) { }

  public getTime(): Observable<any> {
  return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
}

}
