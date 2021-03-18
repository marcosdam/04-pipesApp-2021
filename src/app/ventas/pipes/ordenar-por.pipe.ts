import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenarPor'
})
export class OrdenarPorPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenPor: string = 'sin valor'): Heroe[] {

    switch ( ordenPor ){
      case 'nombre':
        return heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );
      case 'vuela':
        return heroes.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1 );
      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 );
      default:
        return heroes;
    }
  }

}
