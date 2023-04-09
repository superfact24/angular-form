import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-edit-aluno',
  templateUrl: './edit-aluno.component.html',
  styleUrls: ['./edit-aluno.component.scss']
})
export class EditAlunoComponent implements OnInit {

  alunoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    data_nascimento: new FormControl('', [Validators.required]),
    cursoId: new FormControl('', [Validators.required]),
  });

  id: any;
  aluno: any;

  constructor(
    private _alunosService: AlunosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.getAluno(this.id);
  }

  editAluno() {
    let aluno: any = this.alunoForm.getRawValue();
    this._alunosService.editAlunos(aluno, this.id).subscribe(data => {
      this._router.navigate(['/alunos']);
    })
  }

  getAluno(id: Number) {
    this._alunosService.getAluno(id).subscribe(data => {
      this.aluno = data;
      this.alunoForm = new FormGroup({
        nome: new FormControl(this.aluno?.nome, [Validators.required]),
        data_nascimento: new FormControl(this.aluno?.data_nascimento, [Validators.required]),
        cursoId: new FormControl(this.aluno?.cursoId, [Validators.required]),
      });
    })
  }
}
