import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = 'ricardo'
cliente1.cpf = 1233453465;

const cliente2 = new Cliente();
cliente2.nome = 'Alice'
cliente2.cpf = 888523465;


const contaCorrenteRicardo = new contaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(2000)

const conta2 = new contaCorrente()
conta2.cliente = cliente2;
conta2.agencia = 102;
conta2.depositar(1500)


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)




console.log(conta2.saldo)
