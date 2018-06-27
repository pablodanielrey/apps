import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    LoginComponent,
    SistemaComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMenuModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
