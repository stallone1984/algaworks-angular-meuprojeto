import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioService } from './funcionario.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
