import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  api: string = 'http://localhost:8080/api/subjects';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  addSubject(subject: any): Observable<any> {
    return this.http.post<any>(this.api, subject)
  }

  delete(subject: any): Observable<any> {
    return this.http.delete<any>(`${this.api}/${subject.id}`)
  }

  findById(subject: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${subject.id}`, subject);
  }
}
