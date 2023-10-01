import express from "express";
import { createCustomer } from "../controllers/customerCnt.js";
import { createCustomerMulter } from "../utlis/multer.js";

// Init Express
const router = express.Router();

// Create Router

router.post("/customer", createCustomerMulter,createCustomer)


// Export Default
export default router;