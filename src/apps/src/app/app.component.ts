import { Component } from '@angular/core';
import { Router } from '@angular/router';

// configuro la autentificacion
import { AuthConfig } from 'angular-oauth2-oidc';

import { environment } from '../environments/environment';

/*
export const authConfig: AuthConfig = {
  issuer: environment.oidp_issuer,
  redirectUri: window.location.origin,
  // tokenEndpoint: 'https://oidp.econo.unlp.edu.ar/oauth2/auth',
  userinfoEndpoint: environment.userinfoEndpoint,
  loginUrl: environment.loginUrl,
  logoutUrl: environment.logoutUrl,
  oidc: true,
  requireHttps: false,
  clientId: 'apps-ui',
  dummyClientSecret: 'apps-ui',
  scope: 'openid profile email',
  showDebugInformation: true
}
*/
export const authConfig: AuthConfig = {
  issuer: environment.oidp_issuer,
  redirectUri: window.location.origin,
  clientId: 'apps-ui',
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

  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    console.log('configurando oauth2');
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.events.subscribe(e => {
        console.debug('oauth/oidc event', e);
    })
    console.log('tratando de loguearme');
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    if (this.oauthService.getAccessToken() == null) {
      this.router.navigate(['/loader']);
    } else {
      this.router.navigate(['/sistema/inicial']);
    }

  }
}
