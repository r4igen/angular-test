import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {
  copyright = '© ACME S.A.';
  hoy = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
