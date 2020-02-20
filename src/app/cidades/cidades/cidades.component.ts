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
    this.cidadeService.consultar()
    .then(cidades => {
      this.cidades = cidades;
    });
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
