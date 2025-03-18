import { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
/**
 Se uso un schema para la dirección, ya que se puede reutilizar en otros modelos.
 y para aumentar la legibilidad del código y la escalabilidad del proyecto.
 ya que si se requiere hacer cambios en el schema de dirección, solo se hace en un lugar.
 */	

const directionSchema = new Schema({
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
    codigo_postal: { type: String, required: true }
});

directionSchema.plugin(mongoosePaginate);
export default directionSchema;