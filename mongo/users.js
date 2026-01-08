db = db.getSiblingDB("toyshop");

db.users.insertMany([
  {
    username: "customer1",
    name: "Toy Shop Customer",
    email: "customer1@toyshop.com"
  },
  {
    username: "admin",
    name: "Toy Shop Admin",
    email: "admin@toyshop.com"
  }
]);

print("✅ Toy Shop users initialized");

