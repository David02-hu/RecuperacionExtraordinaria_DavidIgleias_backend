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

        precio: {
            type: Number, 
            required: true, 
            min: 0
        }, 

        stock:{
            type: Number, 
            required: true, 
            trim: true
        },

        marca: {
            type: String, 
            required: true, 
            trim: true
        }
    },
    {timestamps: true}
);

const Productos= mongoose.model(
    "Productos",
    productoSchema
); 

export default Productos;