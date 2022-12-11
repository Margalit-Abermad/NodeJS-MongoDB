const jfile = require("jsonfile");
const products=[
  { "id": "123456", "name": "Makeup", "price": 80, "img": "p11" },
  { "id": "78554", "name": "Redness", "price": 45, "img": "p10" },
  { "id": "546110", "name": "Concealer", "price": 30, "img": "p3" },
  { "id": "789751", "name": "Eyeliner", "price": 58, "img": "p6" },
  { "id": "456431", "name": "mascara", "price": 47, "img": "p9" },
  { "id": "543253", "name": "Eye Pencil", "price": 14, "img": "p8" },
  { "id": "895561", "name": "Powder", "price": 42, "img": "p2" },
  { "id": "413156", "name": "Eyeshadows", "price": 75, "img": "p4" },
  { "id": "451225", "name": "Flush", "price": 56, "img": "p7" },
  { "id": "561032", "name": "Shimmer", "price": 61, "img": "p5" }
]

const getAllProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};


const getProductByID = (id) => {
  return new Promise((resolve) => {
    let result=products.find(t=>t.id===id);
    resolve(result);
  });
};

const createProduct = (obj) => {
  return new Promise((resolve) => {
      products.push(obj);
      resolve("created");
  });
};


const updateProduct = (id, obj) => {
  return new Promise((resolve) => {
    let index = products.findIndex((t) => t.id === id);
    if (index >= 0)
        products[index] = obj;
        resolve("updated");
  });
};

const deleteProduct = (id) => {
  return new Promise((resolve) => {
      let index = products.findIndex((t) => t.id === id);
      if (index >= 0)
        products.splice(index, 1);
        resolve("deleted");
  });
};

module.exports = {getAllProducts,getProductByID,createProduct,updateProduct,deleteProduct};
