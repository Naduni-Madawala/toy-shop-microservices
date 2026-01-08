const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "ToyShop Customer" }
  ]);
});

app.listen(8080, () => {
  console.log("👤 User service running");
});

