import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){
  }

  //Acordate que cuando crea un servicio de tipo get() es tambien una propiedad
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  

 

}
