const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;
const mealsJSON = require("./meals.json")

    app.listen(PORT, () =>{
        console.log(`run port ${PORT}`);
    })

    app.get("/", (req, res) =>{
        response.send({response: true, message: {mealsJSON}})
    })