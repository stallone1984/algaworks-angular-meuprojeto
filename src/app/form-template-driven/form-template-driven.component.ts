import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent  {

  profissao = 'Outras';
  cliente = new Cliente();

  profissoes = ['Programador', 'Engenheiro', 'Outras'];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;
    console.log(form);
    //console.log(this.cliente);


  }

}
