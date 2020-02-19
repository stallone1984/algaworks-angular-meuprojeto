import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funcionarios = [];


  constructor(
    private funcionarioService: FuncionarioService
  ){
    
  }

  aoAdicionar(funcionario) {
    this.funcionarioService.adicionar(funcionario)
    this.funcionarios = this.funcionarioService.consultar();
  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }
}
