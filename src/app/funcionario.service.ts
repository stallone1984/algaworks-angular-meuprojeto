import { Injectable } from '@angular/core';

export class FuncionarioService {

    ultimoId = 1;
    funcionarios = [];

    adicionar(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(JSON.stringify(this.funcionarios));
        
    }

    consultar() {
        return this.funcionarios;
    }
}