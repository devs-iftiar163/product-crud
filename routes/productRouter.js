import express from "express";
import {
  createProduct,
  createProductPage,
  deleteProducts,
  eidtSingleProductPage,
  getAllProducts,
  getSingleProducts,
  showAllProduct,
  showSingleProductPage,
  updateProductPage,
} from "../controllers/productCnt.js";
import { createProductMulter } from "../utlis/multer.js";

// Init Router
const router = express.Router();

// EJS Router
router.get("/", showAllProduct);
router.get("/create", createProductPage);
router.get("/single/:slug", showSingleProductPage);
router.get("/edit/:id", eidtSingleProductPage);
router.post("/update/:id", createProductMulter, updateProductPage);

// Create Product Router
router.get("/product", getAllProducts);
router.get("/product/:slug", getSingleProducts);
router.get("/product-delete/:id", deleteProducts);
router.post("/product", createProductMulter, createProduct);

// Export Default
export default router;
