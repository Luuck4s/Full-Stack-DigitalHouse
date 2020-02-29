const pets = require("./pets.json");

/**
 * transforme a string de data do pets para um objeto Date
 */

pets.map(pet => {
  pet.nascimento = new Date(pet.nascimento);
  return pet;
});

const servVacina = pet => {
  if (pet.vacinado) {
    console.log(`O ${pet.nome} já está vacinado.`);
  } else {
    console.log(`Dando vacina no(a) ${pet.nome}`);
    pet.servicos.push("Vacina");
    pet.vacinado = true;
  }

  return pet;
};

/**
 *  Aplicando a função servVacinar a todos os pets
 */

pets.map(servVacina);

/**
 *  Retonar o total de servicos de todos os cachorros
 */
const somaServicos = pets =>
  pets.reduce((total, pet) => total + pet.servicos.length, 0);

console.log(somaServicos(pets));

/**
 * Receber o nome e retornar todos os pet que tenha esse nome
 */

const buscarPorNome = (trecho, pets) =>
  pets.filter(pet => pet.nome.includes(trecho));

console.log(buscarPorNome("u", pets));
