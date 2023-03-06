import { Component } from '@angular/core';
import { Color, Heore } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-oredenar',
  templateUrl: './oredenar.component.html',
  styleUrls: ['./oredenar.component.css']
})
export class OredenarComponent {

  enMayusculas: boolean = true;
  ordenarPor:string = '';

  heroes: Heore[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.azul
    },
  ];

  cambiarBoolean() {
    this.enMayusculas = !this.enMayusculas;
  }

  porNombre( valor: string){
    this.ordenarPor = valor;
  }

}
