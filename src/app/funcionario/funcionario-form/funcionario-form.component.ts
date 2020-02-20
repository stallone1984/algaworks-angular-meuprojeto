import { Component, Output, EventEmitter } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
  //providers: [FuncionarioService]
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Heitor';
  adicionado = false;
  funcionarios = [];

  @Output() funcionarioAdicionado = new EventEmitter();

  adicionarFuncionario(nome: string) {
    console.log(nome);
    this.nome = nome;
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
