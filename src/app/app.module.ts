import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { BotoesModule } from './botoes/botoes.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    FormTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BotoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
