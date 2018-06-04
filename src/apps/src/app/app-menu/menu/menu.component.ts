import { Component,ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Aplicacion } from '../aplicacion'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {

  @Input()
  items: Array<Aplicacion> = new Array<Aplicacion>();

  constructor() { }

  ngOnInit() {

  }

}
