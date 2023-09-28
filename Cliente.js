export class Cliente {
    nome;
    _cpf;
    email;
    telefone;
    enderenco;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
    }
}