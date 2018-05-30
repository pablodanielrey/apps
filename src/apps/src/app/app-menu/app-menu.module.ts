import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class AppMenuModule { }
