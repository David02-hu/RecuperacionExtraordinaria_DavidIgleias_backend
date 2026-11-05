import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String, 
            required: true, 
            trim: true
        }, 

        descripcion: {
            type: String, 
            required: true, 
            trim: true

        }, 

        estado: {
            type: String, 
            required: true, 
            trim: true
        }, 
    },
    {timestamps: true}
);

const Categoria= mongoose.model(
    "Categoria",
    categoriaSchema
); 

export default Productos;