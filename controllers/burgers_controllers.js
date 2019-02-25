const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", (req, res)=>{
  burger.all(burgerData => {
    res.render("index",{burger_data:burgerData})
  })
});

export default router;

