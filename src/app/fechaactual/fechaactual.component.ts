import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  /*
  template: `<p>Lima, Perú {{ hoy | date:'d/M/y H:mm' }}</p>
                <app-copyright></app-copyright>`,
  */
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent implements OnInit {

  hoy = new Date();
  ciudad = 'Perú';
  resultado = 1.148;
  dolareuro = 0.94;
  nombre = 'Luis';
  sexo = 'hombre';
  encabezamiento = { hombre: 'Estimado', mujer: 'Estimada'};

  constructor() { }

  ngOnInit(): void {
  }
}
