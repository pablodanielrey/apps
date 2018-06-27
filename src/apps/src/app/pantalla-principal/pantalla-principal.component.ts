import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aplicacion } from '../aplicacion';


@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  items: Array<Aplicacion> = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.items.push(new Aplicacion('Usuarios','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/usuarios.png','https://usuarios.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('Correo','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/gmail.png','http://correo.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('Drive','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/drive.png','https://drive.google.com'));
    this.items.push(new Aplicacion('Gelis','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/gelis.png','https://gelis.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('AU24','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/au24.png','http://www.au24.econo.unlp.edu.ar/'));
    this.items.push(new Aplicacion('Asistencia','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/asistencia.png','https://assistance.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('Laboral','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/insercion.png','http://insercionlaboral.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('Digesto','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/digesto.png','http://digesto.econo.unlp.edu.ar/norma/'));
    this.items.push(new Aplicacion('Concursos','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/concurso.png','http://concursos.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('Adscriptos','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/adscriptos.png','http://adscriptos.econo.unlp.edu.ar'));
    this.items.push(new Aplicacion('SIU Guaraní','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/siu_guarani.png','https://www.guarani-economicas.unlp.edu.ar'));
    this.items.push(new Aplicacion('Recibos','http://www.ditesi.econo.unlp.edu.ar/wp/wp-content/uploads/RECIBOS.png','https://recibos.unlp.edu.ar'));
  }

  abrir(i) {
    this.router.navigate(i.link);
  }

}
