// exercicio 1 hora de codar 3:
//Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem 
//regressiva vá de 30 a 0. Utilize "console.log" para escrever em tela e no final da repetição escreva "EXPLOSÃO".


//function countdown(seconds) {
  //  if (seconds < 0) {
    //  console.log("EXPLOSÃO!");
      //return;
    //}
    
    //console.log(seconds);
    //setTimeout(function() {
      //countdown(seconds - 1);
    //}, 1000);
  //}
  
  //countdown(30);





  //Exercicio 2 hora de codar 3:
// Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo 
//valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor 
//não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão 
//do primeiro valor lido pelo segundo valor.



//  let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
//let valor2 = parseFloat(prompt('Digite o segundo valor: '));

//while (valor2 <= 0) {
  //valor2 = parseFloat(prompt('Valor inválido. Digite um novo valor para o segundo número: '));
//}

//const resultado = valor1 / valor2;
//console.log(`O resultado da divisão é: ${resultado}`);






  //exercicio 3 hora de codar 3:
//Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
//Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


  //for (let i = 10; i >= 1; i--) {
    //console.log(i);
  //}





// Exercicio 4 hora de codar 3:
//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive)



//let soma = 0;
//let quantidade = 0;

//for (let i = 15; i <= 100; i++) {
  //soma += i;
  //quantidade++;
//}

//const media = soma / quantidade;
//console.log(`A média aritmética dos números entre 15 e 100 é: ${media}`);





//Exercicio 5 hora de codar 3
//- Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados 
//pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.


//const numero1 = parseInt(prompt('Digite o primeiro número: '));
//const numero2 = parseInt(prompt('Digite o segundo número: '));

//let soma = 0;
//let quantidade = 0;

//const menor = Math.min(numero1, numero2);
//const maior = Math.max(numero1, numero2);

//for (let i = menor; i <= maior; i++) {
  //soma += i;
  //quantidade++;
//}

//const media = soma / quantidade;

//console.log(`A média aritmética dos números entre ${menor} e ${maior} é: ${media}`);





//Exercicio 6 hora de codar 3:
//- Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de 
//aprovação é 9,5. Logo após escrever a mensagem "Calcular a média 
//de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, 
//caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.



//let quantidadeAprovados = 0;
//let calcularOutroAluno = true;

//while (calcularOutroAluno) {
  //const nota1 = parseFloat(prompt('Digite a primeira nota do aluno: '));
  //const nota2 = parseFloat(prompt('Digite a segunda nota do aluno: '));

  //const media = (nota1 + nota2) / 2;
  //console.log(`Média final: ${media.toFixed(2)}`);

  //if (media >= 9.5) {
    //quantidadeAprovados++;
  //}

  //const resposta = prompt('Calcular a média de outro aluno? (S/N): ');
  //calcularOutroAluno = resposta.toUpperCase() === 'S';
//}

//console.log(`Quantidade de alunos aprovados: ${quantidadeAprovados}`);





//Exercicio 7 hora de codar 3:
//Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. 
//Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.


//const quantidadeNotas = 6;
//let notas = [];
//let somaNotas = 0;

//for (let i = 1; i <= quantidadeNotas; i++) {
  //let nota;
  //do {
    //nota = parseFloat(prompt(`Digite a nota ${i}: `));
  //} while (nota < 0 || nota > 10);
  
  //notas.push(nota);
  //somaNotas += nota;
//}

//const media = somaNotas / quantidadeNotas;
//console.log(`A média do aluno é: ${media.toFixed(2)}`);





//Exercicio 8 hora de codar 3:
//- Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário


//const n = parseInt(prompt('Digite um valor N: '));

//for (let i = 1; i <= n; i++) {
  //console.log(i);
//}






//Exercicio 9 hora de codar 3:
// Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100


//let contador = 0;
//let numero = 101;

//while (contador < 10) {
  //console.log(numero);
  //numero++;
  //contador++;
//}




//Exercicio 10 hora de codar 3:
//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.


//const n = parseInt(prompt('Digite o valor de N: '));

//for (let i = 1; i <= n; i++) {
  //console.log(`Tabuada do ${i}:`);
  //for (let j = 1; j <= 10; j++) {
    //const resultado = i * j;
    //console.log(`${i} x ${j} = ${resultado}`);
  //}
  //console.log('----------------------');
//}





//Exercicio 11 hora de codar 3:
//Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores 
//lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.



//let dentroIntervalo = 0;
//let foraIntervalo = 0;

//for (let i = 1; i <= 10; i++) {
  //const valor = parseInt(prompt(`Digite o valor ${i}: `));

  //if (valor >= 24 && valor <= 42) {
    //dentroIntervalo++;
  //} else {
    //foraIntervalo++;
  //}
//}

//console.log(`Valores dentro do intervalo: ${dentroIntervalo}`);
//console.log(`Valores fora do intervalo: ${foraIntervalo}`);
