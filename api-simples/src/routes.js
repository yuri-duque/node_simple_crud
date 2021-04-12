const express = require("express");

const routes = express.Router();
const HamburgerController = require("./app/controller/HamburgerController"); // importando a controller

routes.get("/hamburger", HamburgerController.index);

routes.post("/hamburger", HamburgerController.store);

module.exports = routes;