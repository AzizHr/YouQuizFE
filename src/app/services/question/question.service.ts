import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  api: string = 'http://localhost:8080/api/questions';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  addQuestion(question: any): Observable<any> {
    return this.http.post<any>(this.api, question)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`, { responseType: 'json' })
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  update(question: {}): Observable<any> {
    return this.http.put<any>(`${this.api}`, question);
  }
}
