import { Router } from "express";
import CartController from "./controllers/CartController";


const routes = new Router();

// routes.get("/transactions", ...);
routes.get("/cart", CartController.index);


export default routes;