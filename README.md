## 📝 Prueba Técnica - Backend con Node.js y mongoDB

### 📌 Descripción  
Este proyecto es una API REST desarrollada con **Node.js**, **Express** y **MongoDB**. Permite gestionar usuarios, incluyendo la creación, lectura, actualización y eliminación (CRUD).  

---

### 🚀 Tecnologías Utilizadas  
- **Node.js** - Entorno de ejecución  
- **Express.js** - Framework para backend  
- **MongoDB** - Base de datos NoSQL  
- **Mongoose** - ODM para MongoDB  
- **dotenv** - Manejo de variables de entorno  

---

### 💒 Estructura del Proyecto  
```bash
📎 PruebaTecnica
 └── src/
     ├── Controllers/
     │   └── ControllerUser.js
     ├── Database/
     │   └── MongoDB.js
     ├── Models/
     │   ├── Direction.js
     │   └── User.js
     ├── Routes/
     │   └── UserRoutes.js
     ├── Utils/
     │   └── Configs.js
 ├── .env
 ├── .env.example
 ├── .gitignore
 ├── app.js
 ├── package.json
 └── README.md
```

---

### ⚙ Configuración e Instalación  

#### 1. Clonar el repositorio  
```bash
git clone https://github.com/AlexCode04/PruebaTecnicaConteo.git
cd PruebaTecnicaConteo
```

#### 2. Instalar dependencias  
```bash
npm install
```

#### 3. Configurar variables de entorno  
- Copiar el archivo `.env.example` y renombrarlo como `.env`  
- Modificar los valores según tu configuración:  

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/
MONGODB_DB=prueba_tecnica
```

#### 4. Iniciar el servidor  
```bash
npm start
```

o con **nodemon** para desarrollo:  
```bash
npm run dev
```

---

### 🛠 Endpoints Disponibles  
#### 🔹 Usuarios (`/api/usuarios`)
| Método   | Endpoint  | Descripción                  |
|----------|-----------|------------------------------|
| **POST**   | `/`         | Crea un nuevo usuario     |
| **GET**    | `/`         | Lista todos los usuarios  |
| **GET**    | `/:id`      | Obtiene un usuario por ID |
| **GET**    | `/buscar`   | Obtiene usuarios por Ciudad |
| **PUT**    | `/:id`      | Actualiza un usuario por ID |
| **DELETE** | `/:id`      | Elimina un usuario por ID |

**Ejemplo de usuario:**  
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 30,
  "direcciones": [
    {
      "calle": "Av. Principal",
      "ciudad": "Lima",
      "pais": "Perú",
      "codigo_postal": "15001"
    }
  ]
}
```

---

### 🛡 Buenas Prácticas Implementadas  
✅ Uso de variables de entorno con `dotenv`  
✅ Código modular con **MVC (Model-View-Controller)**  
✅ Validaciones con **Mongoose**  
✅ Manejo de errores con `try/catch`  
✅ Rutas organizadas en `Routes/`  

---

### 📌 Autor  
**AlexCode04** - [GitHub](https://github.com/AlexCode04)

---
