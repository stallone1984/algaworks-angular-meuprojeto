import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario/funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { FuncionarioService } from './funcionario/funcionario.service';
import { LogService } from './log.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { CidadesModule } from './cidades/cidades.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    CampoColoridoDirective,
    FormTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    FuncionarioModule,
    CidadesModule
  ],
  providers: [
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
