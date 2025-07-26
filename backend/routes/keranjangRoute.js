import express from "express";
import { addCart, getCartAll } from "../controllers/keranjangControllers.js";

const route = express.Router();

route.get("/cart", getCartAll);
route.post("/cart", addCart);

export default route;
