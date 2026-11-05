import Productos from "../models/Categoria";
import Productos from "../models/Categoria";
import Productos from "../models/Categoria";
import Productos from "../models/Categoria";

export const crearCategoria = async(req, res, next) => {
    try{
        const Productos= await Productos.create(req.body); 

        res.status(201).json({
            mensaje:"categoria no encontrado",
            Productos
        });
    }catch (error){
        next(error);
    }
};

export const obtenerCategoria= async (req,res, next)=> {
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

export const actualizarCategoria = async (req, res, next) =>{
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
                mensaje:"categoria no encontrado"
            });
        }
        res.status(200).json({
            mensaje:"categoria actualizado",
            Productos
        });
    } catch(error){
        next (error);
    }
};

export const eliminarCategoria = async (req, res, next) =>{
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
                mensaje:"Categoria no encontrado"
            });
        }
        res.status(200).json({
            mensaje:"Categoria eliminado",
            Productos
        });
    } catch(error){
        next (error);
    }
};

