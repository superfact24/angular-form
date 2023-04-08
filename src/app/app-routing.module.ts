import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
