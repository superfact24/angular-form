import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.scss']
})
export class EditCursoComponent implements OnInit {

  cursoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    duracao: new FormControl('', [Validators.required]),
  });

  curso: any;
  id: any;

  constructor(
    private _cursosServices: CursosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.getCurso(this.id);
  }

  editCurso() {
    let curso: any = this.cursoForm.getRawValue();
    this._cursosServices.editCursos(curso, this.id).subscribe(data => {
      this._router.navigate(['/cursos']);
    })
  }

  getCurso(id: Number) {
    this._cursosServices.getCurso(id).subscribe(data => {
      this.curso = data;
      this.cursoForm = new FormGroup({
        nome: new FormControl(this.curso?.nome, [Validators.required]),
        descricao: new FormControl(this.curso?.descricao, [Validators.required]),
        duracao: new FormControl(this.curso?.duracao, [Validators.required]),
      });
    })
  }
}
