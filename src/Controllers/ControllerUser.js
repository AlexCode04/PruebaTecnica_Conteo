import User from '../Models/User.js';

/*
 
Se crea un controlador para el usuario, el cual se encarga de manejar las peticiones que se hagan a la base de datos
Las validaciones de los datos se hacen en el modelo, ya que es el encargado de guardar los datos en la base de datos
y el controlador solo se encarga de manejar las peticiones y respuestas.

*/

class ControllerUser {

    async getUsers(req, res) {
        try {
            let users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            let user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createUser(req, res) {
        try {
            let user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: 'User updated' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async searchUserByCity(req, res) {
        try {
            let users = await User.find({ 'direcciones.ciudad': req.query.ciudad });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default new ControllerUser();