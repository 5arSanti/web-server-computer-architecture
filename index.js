const express = require("express");
const path = require("path")

const app = express();
const port = 3080;

app.use(express.json());


app.get("/", (request, response) => {
    response.send("Hola mi servidor web para el Proyecto de Arquitectura de Computadores");
});

app.get("/home", (request, response) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'views/index.html';
    response.sendFile(fileName, options, (err) => {
        if (err) { return response.send("Error enviando el archivo") }
    });
});


app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})


