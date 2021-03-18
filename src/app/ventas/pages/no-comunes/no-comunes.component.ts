import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Marcos';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Paco','Carlos','Pepe','Miguel','Javier'];

  clientesMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }


  cambiarPersona(){
    if ( this.nombre === 'Marcos' ){
      this.nombre = 'Blanca';
      this.genero = 'femenino';
    }else if (this.nombre === 'Blanca'){
      this.nombre = 'Marcos';
      this.genero = 'masculino';
    }

  }

  borrarCliente(){
    // Actualizar array
    this.clientes.pop();
  }


  //
  // keyValuePipe
  persona = {
    nombre: 'Marcos',
    edad: 28,
    direccion: 'Valencia, España'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]


  // Async Pipe
  miObservable = interval(5000);


  // con una promesa
  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tengo datos de promesa' );
    }, 3500);
  });

}
