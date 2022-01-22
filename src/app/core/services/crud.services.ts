import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class CrudService<T> {
  protected readonly apiUrl = `${this.baseUrl}/${this.entityname}`;
  constructor(
    protected readonly http: HttpClient,
    protected readonly entityname: string,
    protected readonly baseUrl: string = environment.BASE_API
  ) {}

  find(query?: { [key: string]: string }): Observable<T[]> {
    const params = new HttpParams({ fromObject: query });
    return this.http.get<T[]>(this.apiUrl, { params });
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, body);
  }

  findOne(id: string): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.get<T>(url);
  }

  update(id: string, body: T): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.put<T>(url, body);
  }

  remove(id: string): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.delete<T>(url);
  }

  protected entityUrl(id: string): string {
    return [this.apiUrl, id].join('/');
  }
}
