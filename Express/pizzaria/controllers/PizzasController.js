const pizzas = require("../database/Pizzas.json");
const fs = require("fs");

module.exports = {
  index: (req, res) => {
    return res.render("index", { pizzas });
  },

  show: (req, res) => {
    const { id } = req.params;
    let [pizza] = pizzas.filter((pizza) => pizza.id == id);

    let pizzaAnterior = false;
    let pizzaProxima = false;

    if (pizza.id > 1) {
      pizzaAnterior = pizza.id - 1;
    }

    if (pizza.id < pizzas[pizzas.length - 1].id) {
      pizzaProxima = pizza.id + 1;
    }

    return res.render("pizza", {
      pizza,
      totalPizzas: pizzas.length,
      pizzaAnterior,
      pizzaProxima,
    });
  },

  search: (req, res) => {
    const { search } = req.query;

    if (!search) return res.render("index", { pizzas });

    let searchLower = search.toLowerCase();
    const pizzasSearch = pizzas.filter((pizza) =>
      pizza.nome.toLowerCase().includes(searchLower)
    );

    return res.render("index", { pizzas: pizzasSearch });
  },

  create: (req, res) => {
    res.render("crud-pizzas/create");
  },

  store: (req, res) => {
    const { nome, ingredientes, preco } = req.body;

    let arrIngredientes = ingredientes
      .trim()
      .split(",")
      .map((ing) => ing.trim());

    const id = pizzas[pizzas.length - 1].id + 1;

    const pizza = {
      id: id,
      nome: nome.trim(),
      ingredientes: arrIngredientes,
      preco,
      img: "/img/no-image.png",
      destaque: false,
    };

    pizzas.push(pizza);

    fs.writeFileSync(`${__dirname}/../database/Pizzas.json`, JSON.stringify(pizzas));

    res.redirect("/");
  },

  list: (req, res) => {
    res.render("crud-pizzas/list");
  },
};
