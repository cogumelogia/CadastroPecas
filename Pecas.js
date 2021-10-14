/// Exercício de Lógica de Programação do curso Dev Full Stack Senai São Paulo
/// Cauê Oliveira 11 out 2021

let peso = 100; /// Variável de número a ser inserida pelo usuário

if (peso >= 100) {
    console.log ("A peça possui peso adequado. Continue com o cadastro da peça.")

    let listaPecas = ["Disco de Freio", "Pastilhas", "Vela", "Correia", "Fio"]; /// Variável em lista para ser cadastrada pelo usuário
    let numeroPecas = listaPecas.length;

    if (numeroPecas < 10) {
        console.log ("Você pode inserir mais peças em sua lista.")

        let nomePecas = listaPecas [4]; /// Variável nome, puxando string listada em passo anterior para ser inserida no sistema pelo usuário.
        if (nomePecas.length > 3){
            console.log (`Nome de peça válido. ${nomePecas} cadastrada.`)
        }else{
            console.log ("Nome de peça inválido. A peça precisa ter nome com mais de 3 caracteres.")
        }    
    
    }else{
        console.log ("Limite de peças atingido (máximo 10 peças).")
    }
        
}else{
    console.log ("A peça não possui o peso mínimo e não pode ser cadastrada.")

}
         
/// Fiz a sequência de inserções aninhadas para que cada passo exija a correção na inserção de passo anterior para prosseguir até o final do cadastro.