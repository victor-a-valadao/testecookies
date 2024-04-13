const express = require('express');
const app = express();

var cookie = require('cookie-parser');
app.use(cookie());

let user1 = {
  nome: "Carla",
  apelido: "Carlinha",
  idade: "18",
  cidade: "Vitória"
}

let user2 = {
  nome: "Amanda",
  apelido: "Amá",
  idade: "19",
  cidade: "Serra"
}

let user3 = {
  nome: "Ana",
  apelido: "Aninha",
  idade: "20",
  cidade: "Vila Velha"
}

app.get('/', (req, res) => {
  res.send('Seja bem vindo ao teste de cookies');
});

app.get("/adicionarCookie", (req, res) =>{
  res.cookie("userData", user1, {expire: 400000 + Date.now()});
  res.send("Dados do usuário adicionado com sucesso!");
})

app.get("/mostrarCookie", (req, res) =>{
  res.send(req.cookies);
})


app.get('/logout', (req, res) => {
  res.clearCookie();
  res.send('Usuário desconectado com sucesso!');
})

app.listen(3000);