import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cursos } from '../cursos/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCursos(params = new HttpParams): Observable<Cursos[]> {
    return this.http.get<Cursos[]>('http://localhost:3000/cursos', { params });
  }

  getCurso(id: Number): Observable<Cursos> {
    return this.http.get<Cursos>('http://localhost:3000/cursos/'+id);
  }

  createCursos(curso: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>('http://localhost:3000/cursos', curso);
  }

  editCursos(curso: Cursos, id: Number): Observable<Cursos> {
    return this.http.put<Cursos>('http://localhost:3000/cursos/'+id, curso);
  }

  deleteCursos(id: Number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/cursos/'+id);
  }
}
