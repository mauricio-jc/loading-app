import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url: string = environment.url;

  constructor(private httpClient: HttpClient,) { }

  isFormAdmin(): Observable<boolean> {
    return this.httpClient.get<any>(`${this.url}/forms/is-admin`);
  }

  findAllUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/users`);
  }

  findAllForms(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/forms`);
  }
}
