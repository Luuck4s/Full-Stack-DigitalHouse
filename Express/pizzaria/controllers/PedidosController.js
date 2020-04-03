const pizzas = require("../database/Pizzas.json");

module.exports = {
  add: (req, res) => {
    res.send(req.body);
  }
};
