import categoriaRoutes from "./routes/categoriaController"
import express, { Router } from "express"; 
import {
    crear, 
    listar, 
    obtener, 
    actualizar, 
    eliminar
}from "../controllers/categoriaController";

const router = Router(); 

router.post("/obtenerCategoria");
router.get("/:id", crearCategoria);
router.put("/:id", actualizarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;