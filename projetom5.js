const prompt = require("prompt-sync")()

const armazem = [];

const ordem = () => {

    let digite = prompt("Digite uma propriedade de CSS: ")

    armazem.push(digite)
}

const opcao = () => {

    let pergunta = prompt("Você deseja continuar? [CONTINUAR/SAIR] ").toUpperCase()

    switch (pergunta) {
        case "CONTINUAR":
            condicao = false;
            ordem()
            break;
        case "SAIR":
            condicao = true;
            armazem.sort();
            console.log(armazem)
            break;
        default:
            console.log("Opção inválida.")
    }
}

let condicao = false;

ordem();
while (!condicao) {
    opcao();

}