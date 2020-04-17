const pizzas = require("../database/Pizzas.json");


module.exports = {
  add: (req, res) => {
    const {idPizza} = req.body;
  
    if(!req.session.pizzasId){
      req.session.pizzasId = [idPizza];
    }else{
      req.session.pizzasId.push(idPizza);
    }

    res.redirect('/');
  },

  show: (req, res) => {
    let idPizzas = req.session.pizzasId || [];

    let pizzasCarrinho = idPizzas.map(idPizza => {
      return pizzas.find(pizza => pizza.id == idPizza)
    })

    res.render('carrinho/list', {pizzas: pizzasCarrinho});
  }
};
