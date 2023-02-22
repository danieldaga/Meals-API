
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;
const mealsJSON = require("./meals.json")

    app.use(cors());

    app.listen(PORT, () =>{
        console.log(`run port ${PORT}`);
    })

    app.get("/", (req, res) =>{
        res.send({response: true, message: {mealsJSON}})
    })