import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({

    //Mis componentes que tengo en este modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    //Que cosas quiero hacer visible fuera de este modulo
    exports: [
        ListadoComponent
    ],

    //Solo van modulos que se importan
    imports: [
        CommonModule
    ]
})

export class HeroesModule{


}