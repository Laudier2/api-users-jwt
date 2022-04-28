const mongoose = require('mongoose')

/**
 * Aqui estamos configurando a conecção da base de dados 
 * utilizando uma variavel de ambiente para mais segurança.
 */

//mongoose.connect("mongodb://localhost:27017/Users")
mongoose.connect("mongodb+srv://kali:123hk@cluster0.nsdxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

  /**
   * E abaixo estamos utilizando o .then para acibir umamensage no console caso esteja fucionando corretamente 
   * e o .catch caso aconteca algum erro para mostra qual erro foi.
   */

  .then(() => {
    console.log('A conecção com o mango foi bem sucedida OK!')
  })
  .catch((err) => {
    console.log('Houve um erro ao se conectar com o mongo ' + err)
  })