import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAlunosComponent } from './alunos/list-alunos/list-alunos.component';
import { ListCursosComponent } from './cursos/list-cursos/list-cursos.component';
import { CreateCursoComponent } from './cursos/create-curso/create-curso.component';
import { EditCursoComponent } from './cursos/edit-curso/edit-curso.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'cursos', component: ListCursosComponent},
  {path: 'cursos', children: [
    { path: '', component: ListCursosComponent },
    { path: 'create', component: CreateCursoComponent },
    { path: 'edit/:id', component: EditCursoComponent },
  ]},
  {path: 'alunos', component: ListAlunosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
