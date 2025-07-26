import express from "express";
import { createproduct, deleteBarangById, getBarang, getBarangById, updateBarangById } from "../controllers/productController.js";

const route = express.Router();

// route.get("/barang", getBarang);
// route.get("/barang/:id", getBarangById);
route.post("/product", createproduct);
// route.delete("/barang/:id", deleteBarangById);
// route.patch("/barang/:id", updateBarangById)

export default route;
