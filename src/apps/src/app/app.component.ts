import { Component } from '@angular/core';
import { Router } from '@angular/router';

// configuro la autentificacion
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://oidp.econo.unlp.edu.ar',
  redirectUri: window.location.origin,
  // tokenEndpoint: 'https://oidp.econo.unlp.edu.ar/oauth2/auth',
  userinfoEndpoint: 'https://oidp.econo.unlp.edu.ar/userinfo',
  loginUrl: 'https://oidp.econo.unlp.edu.ar/oauth2/auth',
  logoutUrl: 'https://consent.econo.unlp.edu.ar/logout',
  oidc: true,
  requireHttps: false,
  clientId: 'apps-ui',
  dummyClientSecret: 'apps-ui',
  scope: 'openid profile email',
  showDebugInformation: true
}
import { OAuthService } from 'angular-oauth2-oidc';
import { NullValidationHandler, JwksValidationHandler } from 'angular-oauth2-oidc';



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
    // this.router.navigate(['/sistema/inicial']);
  }
}
