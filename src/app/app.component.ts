import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funcionarios = [];


  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
  ){
    
  }

  aoAdicionar(funcionario) {
    this.logService.log(`Adicionando ${funcionario['nome']}`);
    this.funcionarioService.adicionar(funcionario)
    this.funcionarios = this.funcionarioService.consultar();
  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }
}
