import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})

export class PantallaPrincipalComponent implements OnInit {

  items = [
    {'nombre': 'Gelis', 'link':'https://gelis.econo.unlp.edu.ar', 'img':'http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/gelis.png'},
    {'nombre': 'Asistencia', 'link': 'https://assistance.econo.unlp.edu.ar', 'img':'http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/asistencia.png'}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  abrir(i) {
    window.open(i.link, "_blank");
  }

}
