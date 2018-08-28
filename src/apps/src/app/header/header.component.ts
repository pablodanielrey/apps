import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: any;
  headerTitle: string;

  constructor(private oauthService: OAuthService) {
    this.headerTitle = environment.headerTitle;
  }

  ngOnInit() {
    this.info = this.oauthService.getIdentityClaims();
  }

  salir():void {
    this.oauthService.logOut();
  }
}
