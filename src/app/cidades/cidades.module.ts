import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesComponent } from './cidades/cidades.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CidadesComponent
  ]
})
export class CidadesModule { }
