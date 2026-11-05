import express from "express"; 
import cors from "cors"; 
import cookieParser from "cookie-parser"; 
import categoriaRoutes from ".\routes\"categoriaRoutes.js";
import productosRoutes from ".\routes\"productosRoutes.js";

const app= express ();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/" , (req, res) => {
    res.status(200).json ({
    mensaje: "api correcta"
    });
});

app.use("/api/categoria",cateroriaRoutes); 
app.use("/api/productos",productosRoutes); 

export default app;
