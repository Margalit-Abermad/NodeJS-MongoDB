const express = require("express");
const productsRouter = require("./routers/productRouter");
const app = express();
app.use(express.json());
app.use("/api/products", productsRouter);
app.listen(3000);
console.log("MAIN WORK!!!");


