import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})

export class PantallaPrincipalComponent implements OnInit {

  items = [
    {'nombre': 'Gelis', 'link':environment.linkGelis, 'img':environment.linkGelisLogo},
    {'nombre': 'Asistencia', 'link': environment.linkAsistencia, 'img':environment.linkAsistenciaLogo}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  abrir(i) {
    window.open(i.link, "_blank");
  }

}
