import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  template: `<div>
              <ul *ngFor="let jugador of jugadores"
                  [ngSwitch]="jugador.equipo">
                <li *ngSwitchCase="'L.A. Lakers'"
                    class="lakers">
                  <h3>{{ jugador.nombre }}</h3>
                  <h3 class="equipo">{{ jugador.equipo }}</h3>
                </li>
                <li *ngSwitchCase="'Boston Celtics'"
                    class="celtics">
                  <h3>{{ jugador.nombre }}</h3>
                  <h3 class="equipo">{{ jugador.equipo }}</h3>
                </li>
                <li *ngSwitchCase="'Chicago Bulls'"
                    class="bulls">
                  <h3>{{ jugador.nombre }}</h3>
                  <h3 class="equipo">{{ jugador.equipo }}</h3>
                </li>
              </ul>
             </div>`,
  // templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {
  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers' }
  , { nombre: 'Marry Bird', equipo: 'Boston Celtics' }
  , { nombre: 'Michael Jordan', equipo: 'Chicago Bulls' }
  , { nombre: 'Kareem Abdul-Jabbar', equipo: 'L.A. Lakers' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
