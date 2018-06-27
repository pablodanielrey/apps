
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { SistemaComponent } from './sistema/sistema.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'loader', component: LoaderComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'sistema',
    component: SistemaComponent,
    // canActivate: [OidpGuard],
    children: [
      { path: 'inicial', component: PantallaPrincipalComponent },
    ]
  },
  { path: '**', redirectTo: 'sistema', pathMatch: 'full' }


]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
