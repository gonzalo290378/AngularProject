import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thoe'];
  heroeBorrado: string  = '';

  borrarHeroe(): void{
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || ''; //Si heroeBorrado es undefined que devuelva un string vacio
  }

}
