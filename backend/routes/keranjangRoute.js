import express from "express";
import { addCart, getCartAll, updateCartById } from "../controllers/keranjangControllers.js";

const route = express.Router();

route.get("/cart", getCartAll);
route.post("/cart", addCart);
route.patch("/cart/:id", updateCartById);

export default route;
