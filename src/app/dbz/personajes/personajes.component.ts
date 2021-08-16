import { Component, OnInit, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent {

  //El @Input() lo que hace es indicarle a este componente que puede recibir un valor desde el componente padre
  //@Input() personajes: any [] = [];

  constructor(private dbzService: DbzService){}

  get personajes(){
    return this.dbzService.personajes;
  }



}
