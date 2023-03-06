import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreCompleto: string = 'alejanDro POZoS';

  fecha: Date = new Date();

}
