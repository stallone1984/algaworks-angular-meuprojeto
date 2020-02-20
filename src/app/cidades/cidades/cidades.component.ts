import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidades = [
    { id: 1, nome: 'Uberlândia'},
    { id: 2, nome: 'São Paulo'},
    { id: 3, nome: 'Florianópilis'},
    { id: 4, nome: 'Curitiba'}
  ]

  constructor() { }

  ngOnInit() {
  }

  adicionar(nome) {
    alert(nome);
  }

  atualizar(cidade) {
    alert(JSON.stringify(cidade));
  }

  excluir(id) {
    alert(id);
  }

}
