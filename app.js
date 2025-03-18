import { router } from './src/Routes/UserRoutes.js';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { connectDB } from './src/Database/MongoDB.js';
import { Configs } from './src/Utils/Configs.js';

/*
Prueba técnica para desarrollador backend

Realizada por: Angel Alexis Del castillo Lerma.

El: 17 de Marzo del 2025.

*/

const app = express();

// Se configura el cors para permitir peticiones de cualquier origen ya que no se especifica un origen en la prueba.
app.use(cors(
    {
        origin: '*'
    }
));

try{
    connectDB();
}
catch(err){
    console.log(err);
}

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api', router);

app.listen(Configs.PORT, () => {
  console.log(`Prueba tecnica corriendo en el puerto ${Configs.PORT}`)
});