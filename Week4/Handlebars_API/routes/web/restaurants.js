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
    res.redirect("/restaurants");
    // }
  } catch (error) {
    console.log("test2");
    return next(error);
  }
});

Router.get("/:id", async (req, res, next) => {
  if (req.params.id === "create") {
    res.render("createRestaurant");
  }
});
Router.post("/create", async (req, res, next) => {
  try {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // data comes from a form
    });
    res.redirect("http://localhost:8002/restaurants");
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
