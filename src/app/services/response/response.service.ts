import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  api: string = 'http://localhost:8080/api/responses';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  addResponse(response: any): Observable<any> {
    return this.http.post<any>(this.api, response)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`, { responseType: 'json' })
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  update(response: {}): Observable<any> {
    return this.http.put<any>(`${this.api}`, response);
  }
}
