const axios = require('axios');
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    axios.get('https://bling.com.br/Api/v2/pedidos/json&filters=idSituacao[15,24]/?apikey=8020092b209846d21012501e7e9dfcd71d29550e79beb439e9a0023b872037e99085fdaf')
        .then(function (response) {
            res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(3000);