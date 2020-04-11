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
    let { nome, ingredientes, preco } = req.body;

    nome = nome.trim();

    let img = `/img/${req.file.filename}`;

    let id = pizzas[pizzas.length - 1].id + 1;
    ingredientes = ingredientes.split(",");
    ingredientes.map((ing) => ing.trim());

    preco = Number(preco);

    const pizza = { id, nome, ingredientes, preco, img, destaque: false };
    pizzas.push(pizza);

    fs.writeFileSync("database/Pizzas.json", JSON.stringify(pizzas));
    res.redirect("/pizza");
  },

  list: (req, res) => {
    res.render("crud-pizzas/list", { pizzas });
  },

  edit: (req, res) => {
    let id = req.params.id;

    let pizza = pizzas.find((pizza) => pizza.id == id);

    res.render("crud-pizzas/edit", { pizza });
  },

  delete: (req, res) => {
    let indexPizza = pizzas.findIndex((pizza, index) => {
      return pizza.id == req.params.id;
    });

    pizzas.splice(indexPizza, 1);

    fs.writeFileSync("database/Pizzas.json", JSON.stringify(pizzas));

    res.redirect("/pizza");
  },

  update: (req, res) => {
    let { nome, ingredientes, preco } = req.body;

    ingredientes = ingredientes.split(",");
    ingredientes.map((ing) => ing.trim());

    let index = pizzas.findIndex((pizza) => {
      return pizza.id == req.params.id;
    });

    preco = Number(preco);

    pizzas[index].nome = nome;
    pizzas[index].ingredientes = ingredientes;
    pizzas[index].preco = preco;

    if (req.file != undefined) {
      let img = `/img/${req.file.filename}`;
      pizzas[index].img = img;
    }

    fs.writeFileSync("database/Pizzas.json", JSON.stringify(pizzas));

    res.redirect("/pizza");
  },
};
