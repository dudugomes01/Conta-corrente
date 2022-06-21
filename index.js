import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("ricardo", 1233453465);
const cliente2 = new Cliente("Alice", 888523465);


const contaCorrenteRicardo = new contaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(2000)

const conta2 = new contaCorrente(102, cliente2)
conta2.depositar(1500)


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)


console.log(contaCorrente.numeroDeContas)
