const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/categories/:categoryname/products", (req, res) => {
  res.send("Retrieve top products within a category");
});

app.get("/categories/:categoryname/products/:productid", (req, res) => {
  res.send("Retrieve details of a specific product");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
