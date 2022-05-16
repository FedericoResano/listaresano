import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  nombre!: string;
  comentario!: string;
  constructor() { }

  ngOnInit(): void {
  }

  verEnConsola(_nombre:string, _comentario:string){
    console.log("La opinión de " + _nombre + " es: " + _comentario);
  }
 
}
