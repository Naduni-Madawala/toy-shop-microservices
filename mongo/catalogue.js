db = db.getSiblingDB("toyshop");

db.products.insertMany([
  // 🚗 MODEL CARS (7)
  {
    name: "Ferrari SF-24 Diecast Model Car 2024 Formula 1",
    category: "cars",
    price: 4500,
    image: "ferrari.jpg"
  },
  {
    name: "BMW i8 Modellauto Die Cast Spielzeug Model",
    category: "cars",
    price: 5200,
    image: "BMW.jpg"
  },
  {
    name: "Ford Mustang Shelby GT500 White with Blue Stripes",
    category: "cars",
    price: 6800,
    image: "Mustang.jpg"
  },
  {
    name: "MINIATURA CARRO F1 REDBULL MAX VERSTAPPEN RB19",
    category: "cars",
    price: 4800,
    image: "redbull.jpg"
  },
  {
    name: "Jaguar - E-Type 3.8 Coupe I-Series 1961 black",
    category: "cars",
    price: 6100,
    image: "jaguar.jpg"
  },
  {
    name: "Mercedes AMG Petronas F1",
    category: "cars",
    price: 6900,
    image: "mercedes.jpg"
  },
  {
    name: "Classic Sculpted Model Car",
    category: "cars",
    price: 4300,
    image: "classic.jpg"
  },

  // 🎎 ANIME FIGURES (13)
  {
    name: "Steve Harrington Funko Pop",
    category: "figure",
    price: 3200,
    image: "Steve.jpg"
  },
  {
    name: "Stranger Things Pop! Nancy Wheeler with Shotgun",
    category: "figure",
    price: 3400,
    image: "Nancy.jpg"
  },
  {
    name: "Funko Stranger Things Will (The Wise)",
    category: "figure",
    price: 3600,
    image: "Will.jpg"
  },
  {
    name: "Stranger Things Demogorgon Pop! Vinyl Figure",
    category: "figure",
    price: 3500,
    image: "Demogogans.jpg"
  },
  {
    name: "Joyce funko",
    category: "figure",
    price: 3300,
    image: "Joyce.jpg"
  },
  {
    name: "Funko Pop! Stranger Things Season 5 - Eleven",
    category: "figure",
    price: 3100,
    image: "Elevan.jpg"
  },
  {
    name: "mike funko pop",
    category: "figure",
    price: 3700,
    image: "Mike.jpg"
  },
  {
    name: "Max mayfield season 2 funko pop",
    category: "figure",
    price: 3000,
    image: "Max.jpg"
  },
  {
    name: "Funko Pop! TV: Stranger Things- Dustin ",
    category: "figure",
    price: 3200,
    image: "Dustin.jpg"
  },
  {
    name: "Robin season 2 funko pop",
    category: "figure",
    price: 3100,
    image: "Robin.jpg"
  },
  {
    name: "Stranger Things Vecna Pop! Vinyl Figure",
    category: "figure",
    price: 3300,
    image: "Vecna.jpg"
  },
  {
    name: "Hopper-Funko Pop",
    category: "figure",
    price: 3800,
    image: "Hopper.jpg"
  },
  {
    name: "Funko Pop! TV: Stranger Things- Lucas ",
    category: "figure",
    price: 3400,
    image: "Lucas.jpg"
  }
]);

print("✅ Toy Shop catalogue initialized");

