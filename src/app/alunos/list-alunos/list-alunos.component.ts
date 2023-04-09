import { Component } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent {

  displayedColumns: string[] = ['id', 'nome', 'data_nascimento', 'curso', 'accoes'];

  constructor(
    private _alunosService: AlunosService,
    private _router: Router,
  ) {}
  dataSource: any;

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this._alunosService.getAlunos().subscribe(data => {
      this.dataSource = data;
    });
  }

  deleteAluno(id: Number) {
    this._alunosService.deleteAlunos(id).subscribe(data => {
      this.getAlunos();
    })
  }

  editAluno(id: Number) {
    this._router.navigate(['/alunos/edit/'+id]);
  }
}
