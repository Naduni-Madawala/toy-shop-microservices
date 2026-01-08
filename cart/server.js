const express = require("express");
const app = express();

app.use(express.json());

let cart = [];

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Item added to toy cart", cart });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(8080, () => {
  console.log("🛒 Cart service running");
});

