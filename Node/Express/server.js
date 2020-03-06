const express = require('express');
const app = express();
const pizzaRoutes = require("./routes/pizzaRoutes")

app.use("/pizzas",pizzaRoutes)

app.listen(3000, () => {
    console.log("O servidor foi inciado http://localhost:3000")
});