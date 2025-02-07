1) Crie um programa que dado um número imprima a sua tabuada.
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
</head>
<body>
<script>
// prompt é especifica de ambiente web, ou seja, é necessário instalar uma ambiente de navegador para executar
var numero = prompt("Digite um número para ver sua tabuada:");
// Função para exibir a tabuada
function imprimirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
imprimirTabuada(numero);
</script>
</body>
</html>

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imprimirPares(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            console.log(lista[i]); 
        }
    }
}
imprimirPares(numeros);

3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
var nomes = ["Ana","Carlos","João","Victor","Vanessa","Vera","Vitoria","Valentina"];
function imprimirNomesComV(lista) {
    for (var i = 0; i < lista.length; i++) {
        // charAt(0) verifica o primeiro caractere de uma string
        if (lista[i].charAt(0).toUpperCase() === 'V') {
            console.log(lista[i]);  
        }
    }
}
imprimirNomesComV(nomes);

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
function numerosParesNoIntervalo() {
    var listaPares = [];  // Lista para armazenar os números pares
    for (let i = 10; i <= 50; i++) {
        if (i % 2 === 0) {  // Verifica se o número é par
            listaPares.push(i);  // Adiciona o número par na lista
        }
    }
    return listaPares; 
}
var pares = numerosParesNoIntervalo();
console.log(pares);

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]
var medias = [2, 7, 3, 8, 10, 4];
function mediasDeRecuperacao(lista) {
   console.log("Em recuperação: ")
   for (var i = 0; i < lista.length; i++) {
        if (lista[i] < 5) {
            console.log(lista[i]); 
        }
    }
}
mediasDeRecuperacao(medias);

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]
var notas = [2, 7, 3, 8, 10, 4];
function maiorNota(lista) {
    var maior = lista[0];
    for (var i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    console.log(maior);  
}
maiorNota(notas);
