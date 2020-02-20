import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CidadeService } from './cidades/cidade.service';
import { CidadesModule } from './cidades/cidades.module';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { HelloComponent } from './hello/hello.component';
import { LogService } from './log.service';
import { NavegacaoModule } from './navegacao/navegacao.module';


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
    HttpClientModule,
    NavegacaoModule,
    FuncionarioModule,
    CidadesModule
  ],
  providers: [
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG'},
    CidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
