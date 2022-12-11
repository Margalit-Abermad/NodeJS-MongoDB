const express = require("express");
const productBL = require("../models/productsBL");
const router = express.Router();

router.route("/")
.get(async function (req, resp) {
  let data = await productBL.getAllProducts();
  return resp.json(data);
});

router.route("/:id")
.get(async function (req, resp) {
  let id = req.params.id;
  let data = await productBL.getProductByID(id);
  return resp.json(data);
});

router.route("/")
.post(async function (req, resp) {
  // let body = req.params.body;
  let body = req.body;
  let data = await productBL.createProduct(body);
  return resp.json(data);
});

router.route("/:id")
.put(async function (req, resp) {
  let id = req.params.id;
  let body = req.body;
  let data = await productBL.updateProduct(id, body);
  return resp.json(data);
});

router.route("/:id")
.delete(async function (req, resp) {
  let id = req.params.id;
  let data = await productBL.deleteProduct(id);
  return resp.json(data);
});

module.exports = router;
