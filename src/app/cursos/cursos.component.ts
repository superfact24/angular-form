import { Component } from '@angular/core';
import { Cursos } from './cursos';

const cursos: Cursos[] = [
  {id: 1, nome: 'Hydrogen', duracao: 1.0079, descricao: 'H'},
  {id: 2, nome: 'Helium', duracao: 4.0026, descricao: 'He'},
  {id: 3, nome: 'Lithium', duracao: 6.941, descricao: 'Li'},
  {id: 4, nome: 'Beryllium', duracao: 9.0122, descricao: 'Be'},
  {id: 5, nome: 'Boron', duracao: 10.811, descricao: 'B'},
  {id: 6, nome: 'Carbon', duracao: 12.0107, descricao: 'C'},
  {id: 7, nome: 'Nitrogen', duracao: 14.0067, descricao: 'N'},
  {id: 8, nome: 'Oxygen', duracao: 15.9994, descricao: 'O'},
  {id: 9, nome: 'Fluorine', duracao: 18.9984, descricao: 'F'},
  {id: 10, nome: 'Neon', duracao: 20.1797, descricao: 'Ne'},
];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  displayedColumns: string[] = ['id', 'nome', 'duracao', 'descricao'];
  dataSource = cursos;
}
