import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private api: string = 'localhost:8080/api/subjects';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
