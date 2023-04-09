import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';

const cursos = [
  {
    id: 1,
    nome: 'Introdução ao flexbox',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    duracao: 10
  },
  {
    id: 2,
    nome: 'Boostrap do jeito certo',
    descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    duracao: 20
  },
  {
    id: 3,
    nome: 'Primeiros passos com o Framework Angular',
    descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci nec turpis aliquam iaculis. 
    Nullam sagittis justo quis purus imperdiet commodo. Donec eget turpis vel sapien laoreet iaculis. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    Proin tincidunt, velit id mollis rutrum, magna quam viverra odio, a volutpat urna lorem at nulla. 
    Vestibulum nec facilisis ante. Aenean vel libero ipsum. Etiam sed semper odio. 
    Nulla non semper ipsum, id vestibulum orci. Suspendisse a felis eu massa scelerisque posuere.`,
    duracao: 30
  },
  {
    id: 4,
    nome: 'Aplicações web com Node.js',
    descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci nec turpis aliquam iaculis. 
    Nullam sagittis justo quis purus imperdiet commodo. Donec eget turpis vel sapien laoreet iaculis. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae`,
    duracao: 40
  },
]

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss']
})
export class ListCursosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nome', 'duracao', 'descricao', 'accoes'];

  constructor(
    private _cursosServices: CursosService,
    private _router: Router,
  ) {}
  dataSource: any;

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this._cursosServices.getCursos().subscribe(data => {
      this.dataSource = data;
    });
  }

  editCurso(id: Number) {
    this._router.navigate(['/cursos/edit/'+id]);
  }

  deleteCurso(id: Number) {
    this._cursosServices.deleteCursos(id).subscribe(data => {
      this.getCursos();
    })
  }
}
