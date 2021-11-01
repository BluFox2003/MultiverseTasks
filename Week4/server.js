const express = require("express");

const port = 3001;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

app.post("/users", (req, res) => {
  res.send(`Hello ${req.body.username}`);
});
