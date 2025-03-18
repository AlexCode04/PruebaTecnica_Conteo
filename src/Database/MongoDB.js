import mongoose from 'mongoose';
import { Configs } from '../Utils/Configs.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(Configs.MONGODB_URI + Configs.MONGODB_DB, {
    });

    console.log(`MongoDB Conectado en el puerto : ${conn.connection.port}`);
    
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Ha ocurrido un error');
    }
    process.exit(1);
  }
};

export { connectDB };