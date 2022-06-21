export class contaCorrente{
    agencia;
    _cliente; //Class privada_
    
    _saldo = 0; //Class privada_

    set cliente(novoValor){
        
        this._cliente = novoValor
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    };

    depositar(valor){
        if(valor <= 0){
        return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}