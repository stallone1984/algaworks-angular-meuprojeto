import { LogService } from '../log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {

    ultimoId = 1;
    funcionarios = [];

    constructor(private logService: LogService) { }

    adicionar(funcionario) {
        this.logService.log(`Adicionando nome ${funcionario['nome']}`);
        this.funcionarios.push(funcionario);
    }

    consultar() {
        return this.funcionarios;
    }
}

// export class FuncionarioAbreviadoService extends FuncionarioService {

//     constructor(private numeroCaracteres: number) {
//         super();
//     }

//     adicionar(funcionario) {
//         funcionario['nome'] = funcionario['nome'].substr(0, this.numeroCaracteres)  + '...'
//         super.adicionar(funcionario);
//     }
// }