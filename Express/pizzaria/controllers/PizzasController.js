const pizzas = require("../database/Pizzas.json");

module.exports = {
  index(req, res) {
    return res.render("index", { pizzas });
  },

  search(req, res) {
    console.log(req.query);
    const { id } = req.params;

    let [pizza] = pizzas.filter(pizza => pizza.id == id);

    return res.render("pizza", { pizza });
  }
};
