import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cursos = [
    {
      id: 1,
      nome: 'Lorem Ipsum',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      duracao: 10
    },
    {
      id: 2,
      nome: 'Lorem Ipsum 2',
      descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      duracao: 20
    },
    {
      id: 3,
      nome: 'Lorem Ipsum 3',
      descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci nec turpis aliquam iaculis. 
      Nullam sagittis justo quis purus imperdiet commodo. Donec eget turpis vel sapien laoreet iaculis. 
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Proin tincidunt, velit id mollis rutrum, magna quam viverra odio, a volutpat urna lorem at nulla. 
      Vestibulum nec facilisis ante. Aenean vel libero ipsum. Etiam sed semper odio. 
      Nulla non semper ipsum, id vestibulum orci. Suspendisse a felis eu massa scelerisque posuere.`,
      duracao: 30
    },
  ]

}
