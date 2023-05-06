import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Cursos } from '../cursos/cursos';
import { AlunosService } from '../services/alunos.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos: any;
  alunos: any;
  params = new HttpParams();


  constructor(
    private _cursosServices: CursosService,
    private _alunosServices: AlunosService,
  ) {}

  ngOnInit(): void {
    this.params = this.params.append('_sort', 'id');
    this.params = this.params.append('_order', 'desc');
    this.params = this.params.append('_page', 1);
    this.params = this.params.append('_limit', 5);
    this.getCursos();
    this.getAlunos();
  }

  getCursos() {
    this._cursosServices.listarCursos(this.params).subscribe(data => {
      this.cursos = data;
    })
  }
  getAlunos() {
    this._alunosServices.getAlunos(this.params).subscribe(data => {
      this.alunos = data;
    })
  }

}
