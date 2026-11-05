import productosController from "./routes/productosController"
import express, { Router } from "express"; 
import {
    crear, 
    listar, 
    obtener, 
    actualizar, 
    eliminar
}from "../controllers/productosController";
import { actualizarProducto, crearProductos, eliminarProducto, obtenerProductos } from "../controllers/categoriaController";

const router = Router(); 

router.post("/",obtenerProductos);
router.get("/:id", crearProductos);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

export default router;