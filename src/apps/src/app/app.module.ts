import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { TokenInterceptor } from './auth.service';
import { OidpGuard } from './oidp.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AppMenuModule } from './app-menu/app-menu.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { SistemaComponent } from './sistema/sistema.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { ToogleFullscreenDirective } from './toogle-fullscreen.directive';

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    LoginComponent,
    SistemaComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ToogleFullscreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMenuModule,
    HttpClientModule,
    MaterialModule,
    OAuthModule.forRoot()
  ],
  providers: [
    OidpGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
