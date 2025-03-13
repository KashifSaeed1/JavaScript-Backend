const express = require("express");
require("dotenv").config();

const app = express();


const gitHubData = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
      orders: [1001, 1002, 1003],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA",
      },
      orders: [1004, 1005],
    },
  ],
  products: [
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      stock: 50,
    },
    {
      id: 102,
      name: "Smartphone",
      category: "Electronics",
      price: 699.99,
      stock: 200,
    },
  ],
  transactions: [
    {
      orderId: 1001,
      userId: 1,
      productId: 101,
      quantity: 1,
      total: 999.99,
      status: "Shipped",
    },
    {
      orderId: 1002,
      userId: 1,
      productId: 102,
      quantity: 2,
      total: 1399.98,
      status: "Delivered",
    },
  ],
  settings: {
    currency: "USD",
    language: "en",
    theme: "dark",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("asad");
});

app.get("/login", (req,res) => {
    res.send('<h1>user login</h1>');
})

app.get("/youtube", (req, res)=>{
    res.send("<h2>Go to Youtube </h2>")
})

app.get("/github", (req, res) => {
  res.json(gitHubData);
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

