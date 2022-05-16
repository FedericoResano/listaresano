import { Component, Inject, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})

export class EstudiantesComponent {
  
  estudiantes = [
    {
      nombre: 'Federico',
      apellido: 'Resano',
      fechanacimiento: new Date(1994, 7, 19),
      esprimercurso: true,
      edad: 27,
      sexo: 'Masculino',
      cantidadcursos: 1

    },
    {
      nombre: 'Mariana',
      apellido: 'Gómez',
      fechanacimiento: new Date(2001, 3, 13),
      esprimercurso: false,
      edad: 21,
      sexo: 'Femenino',
      cantidadcursos: 3

    },
    {
      nombre: 'Carlos',
      apellido: 'Rodríguez',
      fechanacimiento: new Date(1986, 10, 17),
      esprimercurso: false,
      edad: 35,
      sexo: 'Masculino',
      cantidadcursos: 2

    },
    {
      nombre: 'Jennifer',
      apellido: 'Molina',
      fechanacimiento: new Date(2003, 4, 30),
      esprimercurso: true,
      edad: 19,
      sexo: 'Femenino',
      cantidadcursos: 1

    },
    {
      nombre: 'Gregorio',
      apellido: 'Barcos',
      fechanacimiento: new Date(1995, 12, 30),
      esprimercurso: false,
      edad: 26,
      sexo: 'Masculino',
      cantidadcursos: 5

    }
  ];

  
}
