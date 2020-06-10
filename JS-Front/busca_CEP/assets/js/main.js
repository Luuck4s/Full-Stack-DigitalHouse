const API_URL = "https://viacep.com.br/ws/";

const cepInput = document.querySelector("#CEP");
const StreetInput = document.querySelector("#rua");
const districtInput = document.querySelector("#bairro");
const ufInput = document.querySelector("#UF");
const cityInput = document.querySelector("#cidade");

async function fetchCEP() {
  let cepLength = cepInput.value.trim().length
  if(cepLength !== 8){
    return;
  }

  let response = await fetch(`${API_URL}/${cepInput.value}/json/`)
  response = await response.json();
  

  StreetInput.value = response.logradouro;
  districtInput.value = response.bairro;
  ufInput.value = response.uf;
  cityInput.value = response.localidade;
}


cepInput.addEventListener('input', fetchCEP)
