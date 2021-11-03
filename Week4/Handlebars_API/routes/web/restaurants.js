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
Router.delete("/", async (req, res, next) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const restaurants = await response.json();
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
