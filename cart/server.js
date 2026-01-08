const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let cart = [];

/**
 * Add item to cart
 */
app.post("/cart", (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({
    message: "Item added to toy cart",
    cart
  });
});

/**
 * Get cart
 */
app.get("/cart", (req, res) => {
  res.json(cart);
});

/**
 * Clear cart
 */
app.delete("/cart", (req, res) => {
  cart = [];
  res.json({ message: "Toy cart cleared" });
});

app.listen(8080, () => {
  console.log("🛒 Cart service running on port 8080");
});
