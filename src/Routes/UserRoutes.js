import express from 'express';
import ControllerUser from '../Controllers/ControllerUser.js';

/* 
Se secciona las rutas, para tener una mejor legibilidad y aumaner la posibilidad de escalabilidad 
para el proyecto.
*/

const router = express.Router();

router.get('/usuarios/buscar', ControllerUser.searchUserByCity);
router.post('/usuarios', ControllerUser.createUser);
router.get('/usuarios', ControllerUser.getUsers);
router.get('/usuarios/:id', ControllerUser.getUserById);
router.put('/usuarios/:id', ControllerUser.updateUser);
router.delete('/usuarios/:id', ControllerUser.deleteUser);

export { router };
