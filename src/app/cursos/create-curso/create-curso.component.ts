import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.scss']
})
export class CreateCursoComponent {

  cursoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    duracao: new FormControl('', [Validators.required]),
  });

  constructor(
    private _cursosServices: CursosService,
    private _router: Router,
  ) {}

  criarCurso() {
    let curso: any = this.cursoForm.getRawValue();
    this._cursosServices.criarCursos(curso).subscribe(data => {
      this._router.navigate(['/cursos']);
    })
  }
}
