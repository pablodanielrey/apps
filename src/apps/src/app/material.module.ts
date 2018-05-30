import { NgModule } from '@angular/core';

import { MatIconModule,
         MatMenuModule
       } from '@angular/material';


@NgModule({
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
