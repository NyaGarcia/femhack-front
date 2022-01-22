import { AuthData } from '../interfaces/auth-data.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService<T> {
  protected readonly apiUrl = `${environment.BASE_API}`;
  constructor(private readonly http: HttpClient) {}

  login(authData: AuthData): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/login`, authData);
  }

  register(authData: AuthData) {
    return this.http.post<T>(`${this.apiUrl}/register`, authData);
  }
}
