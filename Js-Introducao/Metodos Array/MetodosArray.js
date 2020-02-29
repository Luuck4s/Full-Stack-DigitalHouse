// Map
let numeros = [5, 8, 9, 3];

console.log(numeros.map(numero => numero + 1));

// Filter

console.log(numeros.filter(numeros => numeros > 5));

// Reduce

console.log(numeros.reduce((total, atual) => total + atual));
