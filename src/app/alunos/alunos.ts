import { Cursos } from "../cursos/cursos";

export class Alunos {
  "id"?: Number;
  "nome": string;
  "data_nascimento": string;
  "cursoId": Number;
  "curso"?: Cursos;
}
