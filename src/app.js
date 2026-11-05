const express = require('express');
const app = express();
const port = 3000;

/* let teste = "Opa Isso é um teste!"; */

app.get('/', (req, res) =>{
    res.sendFile('views/index.html', {root: __dirname})
})


app.listen(port, () => {
    console.log('Exemplo de aplicação rodando na porta:' + port)
})