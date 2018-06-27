import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.router.navigate(['/sistema/inicial']);
  }
}
