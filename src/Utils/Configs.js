import dotenv from 'dotenv';

/*
Se utiliza dotenv para cargar las variables de entorno desde un archivo .env
se hace de esta forma, porque al cargar las variables de entorno de esta forma
evitamos el gasto de memoria inecesario al cargar las variables en otros archivos
y se evita la repetición de código.
*/ 

dotenv.config();

const Configs = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    MONGODB_DB: process.env.MONGODB_DB || 'test',
    };

export { Configs };
