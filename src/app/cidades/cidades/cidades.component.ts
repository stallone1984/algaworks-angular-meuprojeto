import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidades = []

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
    .subscribe(cidades => {
      this.cidades = cidades;
    });
  }

  adicionar(nome) {
    this.cidadeService.adicionar({nome: nome})
    .then(cidade => {
      alert(`Cidade ${cidade.nome} adicionada com id ${cidade.id}`)
      this.consultar();
    })
  }

  atualizar(cidade) {
    alert(JSON.stringify(cidade));
  }

  excluir(id) {
    alert(id);
  }

}
