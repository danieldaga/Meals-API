
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

    app.get("/:id", (req, res) => {
        const {id} = req.params
        const result = mealsData.filter(meals => meals.meals.idMeal === id)
        res.send({response: true, mealsData: result})
    }) // review