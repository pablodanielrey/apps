import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AppMenuModule } from './app-menu/app-menu.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent
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
