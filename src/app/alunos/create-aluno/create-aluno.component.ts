import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunosService } from 'src/app/services/alunos.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss']
})
export class CreateAlunoComponent implements OnInit{
  alunoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    data_nascimento: new FormControl('', [Validators.required]),
    cursoId: new FormControl('', [Validators.required]),
  });

  cursos: any;

  constructor(
    private _alunosService: AlunosService,
    private _cursosService: CursosService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
      this.getCursos();
  }

  createAluno() {
    let aluno: any = this.alunoForm.getRawValue();
    this._alunosService.createAlunos(aluno).subscribe(data => {
      this._router.navigate(['/alunos']);
    })
  }

  getCursos() {
    this._cursosService.getCursos().subscribe(data => {
      this.cursos = data;
    })
  }
}
