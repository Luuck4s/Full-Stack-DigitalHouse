const pizzas = require("../database/Pizzas.json");

module.exports = {
  index(req, res) {
    return res.render("index", { pizzas });
  },

  search(req, res) {
    const { id, search } = req.query;
   
    if(id){
      let [pizza] = pizzas.filter(pizza => pizza.id == id);
      return res.render("pizza", { pizza });
    }

    if(search){
      let pizzasSearch = pizzas.filter(pizza => pizza.nome.includes(search));

      return res.render("index", { pizzas: pizzasSearch });
    }

    return res.render("index", { pizzas });
  }
};
