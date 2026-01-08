const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// In-memory users (Robot-Shop style demo)
let users = [
  {
    id: 1,
    username: "customer1",
    name: "Toy Shop Customer"
  },
  {
    id: 2,
    username: "admin",
    name: "Toy Shop Admin"
  }
];

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get user by username
app.get("/users/:username", (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Create user
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});

app.listen(8080, () => {
  console.log("👤 User service running on port 8080");
});
