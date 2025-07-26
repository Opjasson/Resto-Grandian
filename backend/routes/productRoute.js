import express from "express";
import { createproduct, getproduct } from "../controllers/productController.js";

const route = express.Router();

route.get("/product", getproduct);
// route.get("/barang/:id", getBarangById);
route.post("/product", createproduct);
// route.delete("/barang/:id", deleteBarangById);
// route.patch("/barang/:id", updateBarangById)

export default route;
