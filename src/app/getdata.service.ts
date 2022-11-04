import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<[]> {
    return this.http.get<[]>(this.url);
  }
}
