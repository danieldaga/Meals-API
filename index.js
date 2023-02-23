
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;
const mealsData = require("./meals.json")

    app.use(cors());

    app.listen(PORT, () =>{
        console.log(`run port ${PORT}`);
    })

    app.get("/", (req, res) =>{
        res.send({response: true, mealsData})
    })

    app.get("/:name", (req, res) => {
        const {name} = req.params
        const result = mealsData.filter(meals => mealsData.meals.strMeal === name)
        res.send({response: true, mealsData: result})
    }) // review