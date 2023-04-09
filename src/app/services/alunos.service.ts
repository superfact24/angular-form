import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alunos } from '../alunos/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  getAlunos(params = new HttpParams): Observable<Alunos[]> {
    return this.http.get<Alunos[]>('http://localhost:3000/alunos?_expand=curso', { params });
  }

  getAluno(id: Number): Observable<Alunos> {
    return this.http.get<Alunos>('http://localhost:3000/alunos/'+id);
  }

  createAlunos(aluno: Alunos): Observable<Alunos> {
    return this.http.post<Alunos>('http://localhost:3000/alunos', aluno);
  }

  editAlunos(aluno: Alunos, id: Number): Observable<Alunos> {
    return this.http.put<Alunos>('http://localhost:3000/alunos/'+id, aluno);
  }

  deleteAlunos(id: Number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/alunos/'+id);
  }
}
