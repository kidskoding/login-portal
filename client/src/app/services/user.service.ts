import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
