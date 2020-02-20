import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(
    private http: HttpClient
  ) { }

  consultar(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cidades');
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', 
    cidade).toPromise()
  }

  excluir(id): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
    .toPromise().then(() => null)
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
    .toPromise()
    .then(response => response)
    .catch(erro => {
      return Promise.reject(`Erro ao alterar cidade ${cidade.nome}`)
    })
  }
}
