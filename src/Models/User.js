import { Schema, model } from 'mongoose';
import directionSchema from './Direction.js';

/**
    Se uso un schema para el usuario, ya que este schema se va a guardar en la base de datos,
    como el enunciado nos especifica que el correo es único, se agrego la propiedad unique a la propiedad email.
    asi evitamos que se guarden correos duplicados en la base de datos.
    Se agrego la propiedad direcciones, ya que un usuario puede tener varias direcciones
 */

const userSchema = new Schema({
    
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    edad: {
        type: Number,
        required: false
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    direcciones: {
        type: [directionSchema],
        required: false
    }
});


const user = model('User', userSchema);

export default user;