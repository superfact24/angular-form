import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCursosComponent } from './cursos/list-cursos/list-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAlunosComponent } from './alunos/list-alunos/list-alunos.component';
import { CreateCursoComponent } from './cursos/create-curso/create-curso.component';
import { EditCursoComponent } from './cursos/edit-curso/edit-curso.component';
import { CreateAlunoComponent } from './alunos/create-aluno/create-aluno.component';
import { EditAlunoComponent } from './alunos/edit-aluno/edit-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListCursosComponent,
    ListAlunosComponent,
    CreateCursoComponent,
    EditCursoComponent,
    CreateAlunoComponent,
    EditAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
