import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import createCustomerRoute from "./routes/customerRoute.js";
import productRouter from "./routes/productRouter.js";
import ejsLayouts from "express-ejs-layouts";

// Env Var
dotenv.config();
const PORT = process.env.PORT || 6060;

// Init Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init EJS
app.set("view engine", "ejs");
app.use(ejsLayouts);

// Public Folder
app.use(express.static("public"));

// Create Router
app.use(createCustomerRoute);
app.use(productRouter);

// Create Server
app.listen(PORT, () => {
  console.log(`Server Is Running On Port ${PORT}`.bgGreen.black);
});
