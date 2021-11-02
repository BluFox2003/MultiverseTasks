const express = require("express");
const app = express();
const port = 8002;
const handlebars = require("./handlebars");
const restaurantRoutes = require("./routes/web/restaurants");

app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/restaurants", restaurantRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
