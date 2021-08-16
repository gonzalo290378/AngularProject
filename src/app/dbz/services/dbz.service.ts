import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 7500
    }
  ];

  //Operador spread: Hacer una simple copia como hace el maestro rompe esa cadena ya que trabajarás sobre una copia.Si tienes más dudas busca parámetros 
  //por valor y/o por referencia en un navegador,pues es algo propio de la programación per se.
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }


  


}