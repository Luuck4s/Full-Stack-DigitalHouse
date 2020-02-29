const pets = require("./pets.json.js");

// Todas as funções devem ser em Arrow Function

/* 
Fazer uma função que receba um cachorro e adicione 
nos serviços dele o banho 
*/

const servBanho = pet => {
  console.log(`Dando banho no ${pet.nome}`);
  pet.servicos.push("Banho");
  return pet;
};

console.log(servBanho(pets[0]));

/* 
Fazer uma função que receba um cachorro e adicione 
nos serviços dele a tosa 
*/

const servTosa = pet => {
  console.log(`Tosando o(a) ${pet.nome}`);
  pet.servicos.push("Tosa");

  return pet;
};

console.log(servTosa(pets[1]));

/* 
Fazer uma função que receba um cachorro e adicione 
nos serviços dele a vacina casa ele não seja vacinado ainda
*/

const servVacina = pet => {
  if (pet.vacinado) {
    console.log(`O ${pet.nome} já está vacinado.`);
  } else {
    console.log(`Dando vacina no(a) ${pet.nome}`);
    pet.servicos.push("Vacinação");
    pet.vacinado = true;
  }

  return pet;
};

console.log(servVacina(pets[2]));

// Função utilizando callback que receba um pet e o serviço que ele ira ser realizado

const aplicarServico = (pet, servico) => {
  return servico(pet);
};

console.log(aplicarServico(pets[0], servBanho));

const aplicarVariosServicos = (pet, ...serv) => {
  for (const s of serv) {
    pet = s(pet);
  }
  return pet;
};

console.log(aplicarVariosServicos(pets[0], servBanho, servTosa));
