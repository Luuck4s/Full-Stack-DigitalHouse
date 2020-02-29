// let é utilizado para declarar variaveis no JS
let minhaVariavel = 10;

// const é utilizado para declarar constantes no JS, o seu valor não pode ser alterado
const minhaConstante = "Digital House";

// Estrutura de controle IF

if (minhaVariavel == 10) {
  console.log("A variavel custa 10");
} else {
  console.log("A variavel não custa 10");
}

//IF ternario
minhaVariavel == 10
  ? console.log("A variavel custa 10")
  : console.log("A variavel não custa 10");

// Laço de repetição FOR
for (let i = 0; i < 3; i++) {
  console.log("Estou no valor de i igual a " + i);
}

// Laço de repetição While

let i = 0;

while (i < 3) {
  console.log("Estou no While");
  i++;
}

// Declarando função

function somar1(a, b) {
  return a + b;
}

console.log(somar1(5,2))

// Arrow function
const somar2 = (a, b) => a + b;

console.log(somar2(5,2))

// Callback

function calcularNumeros(a,b,callback){
    return callback(a,b);
}

console.log(calcularNumeros(5,2,somar1));
