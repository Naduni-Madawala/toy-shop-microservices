const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/toyshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String
});

const Product = mongoose.model("Product", ProductSchema);

/* Seed once */
app.get("/seed", async (req, res) => {
  await Product.deleteMany({});

  await Product.insertMany([
    // 🚗 Model Cars (7)
    { name: "Ferrari F40", category: "cars", price: 4500, image: "ferrari.png" },
    { name: "Lamborghini Aventador", category: "cars", price: 5200, image: "lamborghini.png" },
    { name: "Bugatti Chiron", category: "cars", price: 6800, image: "bugatti.png" },
    { name: "Porsche 911", category: "cars", price: 4800, image: "porsche.png" },
    { name: "McLaren P1", category: "cars", price: 6100, image: "mclaren.png" },
    { name: "BMW M4", category: "cars", price: 3900, image: "bmw.png" },
    { name: "Audi R8", category: "cars", price: 4300, image: "audi.png" },

    // 🎎 Anime Figures (13)
    { name: "Naruto Uzumaki", category: "anime", price: 3200, image: "naruto.png" },
    { name: "Sasuke Uchiha", category: "anime", price: 3400, image: "sasuke.png" },
    { name: "Goku", category: "anime", price: 3600, image: "goku.png" },
    { name: "Vegeta", category: "anime", price: 3500, image: "vegeta.png" },
    { name: "Luffy", category: "anime", price: 3300, image: "luffy.png" },
    { name: "Zoro", category: "anime", price: 3100, image: "zoro.png" },
    { name: "Itachi", category: "anime", price: 3700, image: "itachi.png" },
    { name: "Mikasa", category: "anime", price: 3000, image: "mikasa.png" },
    { name: "Levi", category: "anime", price: 3200, image: "levi.png" },
    { name: "Tanjiro", category: "anime", price: 3100, image: "tanjiro.png" },
    { name: "Nezuko", category: "anime", price: 3300, image: "nezuko.png" },
    { name: "Gojo", category: "anime", price: 3800, image: "gojo.png" },
    { name: "Eren Yeager", category: "anime", price: 3400, image: "eren.png" }
  ]);

  res.send("Toy products seeded");
});

/* APIs */
app.get("/catalogue", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/catalogue/:category", async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

app.listen(8080, () => {
  console.log("📦 Toy Catalogue Service running on 8080");
});

