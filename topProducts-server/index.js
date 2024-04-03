// server.js
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define API endpoints
app.get("/categories/:categoryname/products", (req, res) => {
  // Logic to retrieve top products within a category
  res.send("Retrieve top products within a category");
});

app.get("/categories/:categoryname/products/:productid", (req, res) => {
  // Logic to retrieve details of a specific product
  res.send("Retrieve details of a specific product");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
