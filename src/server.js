import "dotenv/config"; 

import app from "./app.js"; 
import connectDB from"./config/database.js";

const PORT = process.env.PORT || 3000; 

const iniciarServidor = async () => {
    try{
        await connectDB(); 
    
        app.listen(PORT, () => {
            console.log('Servidor funcionando en el puerto {(PORT)}');
        });
    } catch(error){
        console.error(
            "error al iniciar el servidor:",
            error.message
        );
    }
};

iniciarServidor ();
