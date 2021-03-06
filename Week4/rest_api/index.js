// get the instance of sequelize
const {
  connection,
  Restaurant,
  Menu,
  MenuItem,
} = require("./sequelize-connect");
const express = require("express");
const methodOverride = require("method-override");

const app = express();
const port = 3001;
app.use(express.static("public"));
app.use(methodOverride("_method"));

// support req.body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .post("/api/restaurants", async (req, res) => {
    try {
      // create a row in the database using sequelize create method
      const restaurant = await Restaurant.create(req.body);

      // 201 = created a resource
      res.status(201).send(res.redirect("/index.html"));
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .get("/api/restaurants", async (req, res) => {
    try {
      // create a row in the database using sequelize create method
      const restaurants = await Restaurant.findAll({});

      // 200 = success
      res.status(200).send(restaurants);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      where: { id: req.params.id },
    });
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.delete("/api/restaurants/:id", async (req, res) => {
  try {
    await Restaurant.destroy({
      where: { id: req.params.id },
    });
    res.status(204).send(console.log("Deleted"));
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.put("/api/restaurants/:id", async (req, res) => {
  try {
    await Restaurant.update(req.body, { where: { id: req.params.id } });
    res.status(200).send(console.log("Updated"));
  } catch (e) {
    res.status(400).send();
  }
});

// 1. create an endpoint that will get a restaurant by ID (HTTP Method = get)

// 2. create an endpoint that will delete a restaurant by ID (HTTP Method = delete)

// 3. create an endpoint that will update a restaurant by ID (HTTP Method = put)

// 4. create a suite of menu and menu item routes that will CRUD each resource

// 5. find a way to relate the menu items to the menu and the menu to the restaurant

// 6. use Sequelize validation to validate the data being sent (you'll do this in the model). Which status code would you send back?

/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    // force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log("Sequelize connected"))
  .catch((e) => console.log(`Caught error: ${e}`));

app.listen(port, () => console.log(`Express server running on port ${port}`));
