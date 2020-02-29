const http = require("http");

const produtos = [
  {
    nome: "Notebook",
    preco: "1990.90"
  },
  {
    nome: "Celular",
    preco: "990.90"
  }
];

/**
 * Criando um servidor com o módulo nativo do node o http.
 * há duas rotas uma para página inicial e outra onde é enviado um array
 * de json com produtos.
 */

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.end("<h1>Página Inicial</h1>");
    } else if (req.url == "/produtos") {
      res.end(JSON.stringify(produtos));
    }
  })
  .listen(3000, "localhost");
