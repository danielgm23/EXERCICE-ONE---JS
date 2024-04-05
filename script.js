/*let name =  prompt("Digite o seu nome aqui!")
alert("O seu nome é " + name)
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de: */

alert("Digite 2 numeros para realizar uma conta")
let num1 = prompt("Digite o primeiro numero aqui:")
let operator = prompt("Digite o simbolo do qual conta voce quer fazer!")
let num2 = prompt("Digite o segundo numero aqui numero aqui:")
verificaIguais(num1, num2)
let result = 0
switch (operator) {
    case '+':
        result = Number(num1) + Number(num2)
        if (result % 2 === 0 ){
          alert("A soma dos seus números é um número par")
        }
        else {
          alert("A soma dos seus números é um numero impar")
        }
        break
    case '-':
        result = Number(num1)- Number(num2)
        break
    case '*':
        result = Number(num1) * Number(num2)
        break
    case '/':
        result =Number(num1) / Number(num2)
        break
    default:
        console.log('não implementado')
        break
}
function verificaIguais(num1, num2) {
  if (num1 === num2) {
    alert("Os numeros são iguais")

  }
  else {
    alert("Os números sao diferentes")
  }
}
alert("O valor desta conta é " + result)
