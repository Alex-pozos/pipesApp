import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Alejandro Pozos';
  genero: string = 'masculino';

  invitacionMapa = {
    'femenino': 'invitarla',
    'masculino': 'invitarlo'
  }


  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Alejandro', 'Diego', 'Joaquin'];

  clientesMapa = {
    '=0': 'no temenos ningún cliente esperando.',
    '=1': ' temenos un cliente esperando.',
    '=2': ' temenos 2 clientes esperando.',
    //Aqui se pone la ultima opcion que seria mas de 3 clientes con el signo de numeral para poder saber cuantos clientes hay.
    'other': 'tenemos # clientes esperando.'
  };

  cambiarCliente() {
    this.nombre = 'Fernanda Herrera';
    this.genero = 'femenino';
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  //key value Pipe
  persona = {
    nombre: 'Alejandro',
    edad: 35,
    direccion: 'Chalco, Edo. Méx'
  }

  //JSON Pipe
  heroe = [
    {
      nombre: 'Spiderman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    },3500);
  });
}
