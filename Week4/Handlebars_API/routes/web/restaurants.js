const express = require("express");
const Router = express.Router();
const fetch = require("node-fetch");
const config = require("../../config");
const methodOverride = require("method-override");
const url = `${config.url.restaurants}`; // http://localhost:3001/api/restaurants

Router
  // READ
  .get("/", async (req, res, next) => {
    try {
      const response = await fetch(url);
      const restaurants = await response.json();
      res.render("restaurants", { restaurants });
    } catch (error) {
      return next(error);
    }
  });
Router.get("/:id/delete", async (req, res, next) => {
  try {
    const response = await fetch(url + `/${req.params.id}`);
    const restaurant = await response.json();

    res.render("deleteRestaurant", { restaurant });
  } catch (error) {
    return next(error);
  }
});
Router.delete("/:id/delete", async (req, res, next) => {
  try {
    const response = await fetch(url + `/${req.params.id}`, {
      method: "DELETE",
    });
    console.log("test3");
    if (response.ok) {
      res.redirect("http://localhost:8002/restaurants");
      console.log("test");
    }
  } catch (error) {
    console.log("test2");
    return next(error);
  }
});

module.exports = Router;
