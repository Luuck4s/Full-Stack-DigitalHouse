let Pizza = [
    {
        nome: "Pepperoni",
        ingredientes: ["Pepperoni", "Queijo", "Orégano"],
        valor: 50,
        tamanho: "Grande"
    },
    {
        nome: "Marguerita",
        ingredientes: ["Queijo", "Tomate", "Manjericão"],
        valor: 45,
        tamanho: "Grande"
    }
];

/**
 *  Os controllers são a parte da lógica da rota 
*/

module.exports = {
    mostrarPizza(req, res) {
        const { id } = req.params;

        res.send(Pizza[id]);
    },
    listarPizzas(_req, res) {
        res.send(Pizza);
    }
}

