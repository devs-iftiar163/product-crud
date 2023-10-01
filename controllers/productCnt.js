import { createProductSlug, generateRandomId } from "../helpers/helper.js";
import fs from "fs";

// Get Products
export const getAllProducts = (req, res) => {
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  if (productData.length === 0) {
    return res.status(404).json({ message: "No Product Found" });
  }

  res.status(200).json({ product: productData });
};

// Get Single Products
export const getSingleProducts = (req, res) => {
  const { slug } = req.params;

  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  const singleProduct = productData.find((data) => data.slug === slug);

  if (!singleProduct) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  res.status(200).json(singleProduct);
};

// Create Products
export const createProduct = (req, res) => {
  const { title, regularPrice, color, stock } = req.body;

  if (!title || !regularPrice) {
    return res.status(400).json({ message: "Title and Price Required" });
  }

  const product = {
    id: generateRandomId(),
    title,
    slug: createProductSlug(title),
    regularPrice,
    color,
    stock,
    photo: req.file.filename,
  };

  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  productData.push(product);

  fs.writeFileSync("db/productdb.json", JSON.stringify(productData));

  res.redirect("/");
};

// Delete Products
export const deleteProducts = (req, res) => {
  const { id } = req.params;
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  const updatedData = productData.filter((data) => data.id != id);

  fs.writeFileSync("db/productdb.json", JSON.stringify(updatedData));

  res.redirect("/");
};

// Product Show EJS
export const showAllProduct = (req, res) => {
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  res.render("product", { products: productData });
};

export const createProductPage = (req, res) => {
  res.render("create");
};

export const showSingleProductPage = (req, res) => {
  const { slug } = req.params;

  // Get All Products
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  // Find Single Product
  const singleProduct = productData.find((data) => data.slug === slug);

  res.render("show", {
    product: singleProduct,
  });
};

// Update Product CNT
export const eidtSingleProductPage = (req, res) => {
  const { id } = req.params;

  // Get All Products
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  // Find Single Product
  const editProduct = productData.find((data) => data.id === id);

  res.render("edit", {
    product: editProduct,
  });
};

// Update Product Save
export const updateProductPage = (req, res) => {
  const { id } = req.params;
  const { title, regularPrice, color, stock } = req.body;

  // Get All Products
  const productData = JSON.parse(
    fs.readFileSync("db/productdb.json").toString()
  );

  // Photo Manage

  let photo_name =
    productData[productData.findIndex((data) => data.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  productData[productData.findIndex((data) => data.id === id)] = {
    id: id,
    slug: createProductSlug(title),
    title,
    regularPrice,
    color,
    stock,
    photo: photo_name,
  };

  fs.writeFileSync("db/productdb.json", JSON.stringify(productData));

  res.redirect("/");
};
