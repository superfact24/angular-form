import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss']
})
export class ListCursosComponent implements OnInit{
  colunas: string[] = ['id', 'nome', 'duracao', 'descricao', 'accoes'];

  constructor(
    private _cursosServices: CursosService,
    private _router: Router,
  ) {}
  cursos: any;

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this._cursosServices.listarCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  editCurso(id: Number) {
    this._router.navigate(['/cursos/edit/'+id]);
  }

  deleteCurso(id: Number) {
    this._cursosServices.apagarCursos(id).subscribe(data => {
      this.getCursos();
    })
  }
}
