import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss']
})
export class CreateAlunoComponent {
  alunoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    data_nascimento: new FormControl('', [Validators.required]),
    cursoId: new FormControl('', [Validators.required]),
  });

  constructor(
    private _alunosService: AlunosService,
    private _router: Router,
  ) {}

  createAluno() {
    let aluno: any = this.alunoForm.getRawValue();
    this._alunosService.createAlunos(aluno).subscribe(data => {
      this._router.navigate(['/alunos']);
    })
  }
}
