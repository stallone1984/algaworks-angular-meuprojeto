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

export class FuncionarioAbreviadoService extends FuncionarioService {

    constructor(private numeroCaracteres: number) {
        super();
    }

    adicionar(funcionario) {
        funcionario['nome'] = funcionario['nome'].substr(0, this.numeroCaracteres)  + '...'
        super.adicionar(funcionario);
    }
}