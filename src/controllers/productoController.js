import Productos from "../models/Productos";
import Productos from "../models/Productos";
import Productos from "../models/Productos";
import Productos from "../models/Productos";

export const crearProductos = async(req, res, next) => {
    try{
        const Productos= await Productos.create(req.body); 

        res.status(201).json({
            mensaje:"producto no encontrado",
            Productos
        });
    }catch (error){
        next(error);
    }
};

export const obtenerProductos= async (req,res, next)=> {
    try{
        const Productos= await Productos.find();
        res.status(200).json({
            total: Productos.length,
            Productos
        });
    } catch (error) {
        next(error);
    }
};

export const actualizarProducto = async (req, res, next) =>{
    try{
        const Productos =await Productos.findByIdAndUpdate (
            req.params.id,
            req.body,
            {
                new: true, 
                runValidators: true
            }
        );

        if (!Productos){
            return res.status (404).json({
                mensaje:"item no encontrado"
            });
        }
        res.status(200).json({
            mensaje:"item actualizado",
            Productos
        });
    } catch(error){
        next (error);
    }
};

export const eliminarProducto = async (req, res, next) =>{
    try{
        const Productos =await Productos.findByIdAndUpdate (
            req.params.id,
            req.body,
            {
                new: true, 
                runValidators: true
            }
        );

        if (!Productos){
            return res.status (404).json({
                mensaje:"item no encontrado"
            });
        }
        res.status(200).json({
            mensaje:"item eliminado",
            Productos
        });
    } catch(error){
        next (error);
    }
};

