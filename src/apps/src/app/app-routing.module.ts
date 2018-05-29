
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

const routes: Routes = [
{ path: 'inicial', component: PantallaPrincipalComponent },
{ path: '', redirectTo: '/inicial', pathMatch: 'full' }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
