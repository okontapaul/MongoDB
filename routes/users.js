const express = require("express");
paulRouter = express.Router();
const Product = require("../models/product")

paulRouter.get("/users", (req, res) => {
  Product.find()
    .then((p) => {
      res.json(p);
    })
    .catch(() => {
      res.json({
        message: error.message,
      });
    });
});

paulRouter.get("/users/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({
          message: "product not found",
        });
      }
    })
    .catch(() => {
      res.json({
        message: error.message,
      });
    });
});

paulRouter.get("/users/id", (req, res) => {
  res.send("welcome to users page");
});

paulRouter.put("/users", (req, res) => {
  res.send("update one user");
});

paulRouter.post("/users", (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    rating: req.body.rating,
  });
  newProduct
    .save()
    .then((np) => {
      res.json(np);
    })

    .catch((error) => {
      res.json({ message: error.message });
    });
});

module.exports = paulRouter;
