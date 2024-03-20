import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { Form } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private url: string = environment.url;

  constructor(private httpClient: HttpClient,) { }

  isFormAdmin(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/forms/is-admin`);
  }

  findAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  findAllForms(): Observable<Form[]> {
    return this.httpClient.get<Form[]>(`${this.url}/forms`);
  }
}
