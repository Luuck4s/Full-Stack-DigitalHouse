const formElemnt = document.querySelector("form");
const pokemon_name = document.querySelector("#nome");
const imageContainer = document.querySelector(".container-image");

formElemnt.addEventListener("submit", (event) => {
  event.preventDefault();

  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name.value}`;

  getDataPokemom(url);
});

const getDataPokemom = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showImagePokemom(data);
};

const showImagePokemom = ({
  name,
  sprites: { front_default, back_default },
}) => {
  imageContainer.innerHTML = "";
  const frontImageElement = document.createElement("img");
  const backImageElement = document.createElement("img");

  frontImageElement.setAttribute("src", front_default);
  frontImageElement.setAttribute("alt", name);

  backImageElement.setAttribute("src", back_default);
  backImageElement.setAttribute("alt", name);

  imageContainer.appendChild(frontImageElement);
  imageContainer.appendChild(backImageElement);
};
