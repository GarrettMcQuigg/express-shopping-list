const express = require("express");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  return res.send("Homepage");
});

app.use("/items", itemRoutes);

app.listen(3000, function () {
  console.log("App on port 3000");
});
