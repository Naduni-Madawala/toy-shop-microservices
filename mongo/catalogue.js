db = db.getSiblingDB("toyshop");

db.products.insertMany([
  // 🚗 MODEL CARS (7)
  {
    name: "Ferrari F40",
    category: "cars",
    price: 4500,
    image: "ferrari.png"
  },
  {
    name: "Lamborghini Aventador",
    category: "cars",
    price: 5200,
    image: "lamborghini.png"
  },
  {
    name: "Bugatti Chiron",
    category: "cars",
    price: 6800,
    image: "bugatti.png"
  },
  {
    name: "Porsche 911",
    category: "cars",
    price: 4800,
    image: "porsche.png"
  },
  {
    name: "McLaren P1",
    category: "cars",
    price: 6100,
    image: "mclaren.png"
  },
  {
    name: "BMW M4",
    category: "cars",
    price: 3900,
    image: "bmw.png"
  },
  {
    name: "Audi R8",
    category: "cars",
    price: 4300,
    image: "audi.png"
  },

  // 🎎 ANIME FIGURES (13)
  {
    name: "Naruto Uzumaki",
    category: "anime",
    price: 3200,
    image: "naruto.png"
  },
  {
    name: "Sasuke Uchiha",
    category: "anime",
    price: 3400,
    image: "sasuke.png"
  },
  {
    name: "Goku",
    category: "anime",
    price: 3600,
    image: "goku.png"
  },
  {
    name: "Vegeta",
    category: "anime",
    price: 3500,
    image: "vegeta.png"
  },
  {
    name: "Monkey D. Luffy",
    category: "anime",
    price: 3300,
    image: "luffy.png"
  },
  {
    name: "Roronoa Zoro",
    category: "anime",
    price: 3100,
    image: "zoro.png"
  },
  {
    name: "Itachi Uchiha",
    category: "anime",
    price: 3700,
    image: "itachi.png"
  },
  {
    name: "Mikasa Ackerman",
    category: "anime",
    price: 3000,
    image: "mikasa.png"
  },
  {
    name: "Levi Ackerman",
    category: "anime",
    price: 3200,
    image: "levi.png"
  },
  {
    name: "Tanjiro Kamado",
    category: "anime",
    price: 3100,
    image: "tanjiro.png"
  },
  {
    name: "Nezuko Kamado",
    category: "anime",
    price: 3300,
    image: "nezuko.png"
  },
  {
    name: "Satoru Gojo",
    category: "anime",
    price: 3800,
    image: "gojo.png"
  },
  {
    name: "Eren Yeager",
    category: "anime",
    price: 3400,
    image: "eren.png"
  }
]);

print("✅ Toy Shop catalogue initialized");

