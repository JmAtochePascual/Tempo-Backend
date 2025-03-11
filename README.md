# Documentación del Proyecto

Este es el backend de la aplicación **Tempo**, una API robusta y escalable diseñada para la **autenticación segura** y la **gestión de usuarios**. Desarrollada con tecnologías modernas como **Node.js**, **Express**, **MongoDB** y **TypeScript**, esta API proporciona una base sólida para aplicaciones que requieren autenticación de usuarios, manejo de sesiones sobre datos de usuarios.

Tempo está diseñada para ser **fácil de integrar** en cualquier aplicación frontend, ya sea una plataforma web, móvil o de escritorio. Su arquitectura modular y su enfoque en la seguridad la convierten en una solución ideal para proyectos que necesitan un sistema de autenticación confiable y escalable. El objetivo principal de Tempo es proporcionar una **API RESTful** que permita a los desarrolladores implementar rápidamente un sistema de autenticación y gestión de usuarios en sus aplicaciones. Con Tempo, puedes:

- **Registrar nuevos usuarios** de manera segura.
- **Autenticar usuarios** mediante tokens JWT (JSON Web Tokens).
- **Proteger rutas** sensibles de la aplicación.
- **Validar datos de entrada** para garantizar la integridad de la información.
- **Documentar automáticamente** la API para facilitar su uso y mantenimiento.

## 🌟 Características Clave

1. **Autenticación Segura**:

   - Uso de **JWT** para la generación de tokens de acceso.
   - Hash de contraseñas con **Bcrypt** para garantizar la seguridad de las credenciales.
   - Protección de rutas sensibles mediante middleware de autenticación.

2. **Validación de Datos**:

   - Uso de **Express Validator** para validar y sanitizar los datos de entrada.
   - Mensajes de error claros y personalizados para facilitar la depuración.

3. **Documentación Automática**:

   - Integración con **Swagger** para generar documentación interactiva de la API.
   - Acceso fácil a la documentación desde `/api-docs`.

4. **Pruebas Automatizadas**:

   - Pruebas unitarias y de integración con **Jest** y **Supertest**.
   - Cobertura de pruebas para garantizar la estabilidad del código.

5. **Escalabilidad**:

   - Arquitectura modular que facilita la adición de nuevas funcionalidades.
   - Conexión a **MongoDB** para un almacenamiento flexible y escalable.

6. **Configuración Flexible**:
   - Uso de variables de entorno para configurar la aplicación (base de datos, secretos, puertos, etc.).
   - Fácil adaptación a diferentes entornos (desarrollo, pruebas, producción).

## 🚀 Casos de Uso

Tempo es ideal para proyectos que requieren:

- **Aplicaciones web o móviles** con autenticación de usuarios.
- **Plataformas SaaS** que necesiten gestionar múltiples usuarios y roles.
- **Proyectos educativos** para aprender sobre autenticación y APIs RESTful.
- **Prototipos rápidos** que necesiten un backend funcional en poco tiempo.

## 🛠️ Tecnologías y Herramientas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de APIs.
- **MongoDB**: Base de datos NoSQL para almacenar los tickets y usuarios.
- **Mongoose**: ODM (Object-Document Mapping) para interactuar con MongoDB.
- **JSON Web Tokens (JWT)**: Para la autenticación segura de usuarios.
- **Bcrypt**: Para el hash de contraseñas.
- **Express Validator**: Middleware para validar y sanitizar datos de entrada.
- **Swagger**: Documentación interactiva de la API.
- **Morgan**: Middleware para registrar las solicitudes HTTP.
- **Supertest & Jest**: Para realizar pruebas automatizadas.

## 📁 Estructura del Proyecto

```
src/
│── config/           # Configuraciones (Swagger, etc.)
│── data/             # Conexión a la base de datos y limpieza
│── middleware/       # Middlewares de validación y seguridad
│── models/           # Modelos de la base de datos (Usuarios)
│── routers/          # Rutas de la API
│── utils/            # Utilidades generales (JWT, bcrypt, etc.)
│── tests/            # Pruebas automatizadas
│── server.ts         # Configuración del servidor Express
│── index.ts          # Punto de entrada de la aplicación
```

## 🔧 Requisitos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

- **Node.js** (v16 o superior)
- **MongoDB** (local o en la nube)
- **Git** (opcional, para clonar el repositorio)

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio

```bash
<<<<<<< HEAD
git clone https://github.com/JmAtochePascual/Tempo-Backend.git
cd Tempo-Backend
=======
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
>>>>>>> e17948d3e3a0f02c9d725eece468637e9c3283f2
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Cree un archivo `.env` en la raíz del proyecto y defina las siguientes variables:

```
<<<<<<< HEAD

=======
>>>>>>> e17948d3e3a0f02c9d725eece468637e9c3283f2
MONGO_URI=mongodb://localhost:27017/Tempo
FRONTEND_URL=http://localhost:5173
JWT_SECRET=palabraultramegasecreta
PORT=4000
<<<<<<< HEAD

=======
>>>>>>> e17948d3e3a0f02c9d725eece468637e9c3283f2
```

### 4. Iniciar el servidor en desarrollo

```bash
npm run dev
```

### 5. Ejecutar pruebas

```bash
npm run test
```

### 6. Acceder a la documentación de la API

Abra su navegador y visite: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
<<<<<<< HEAD
   git remote add upstream https://github.com/JmAtochePascual/Tempo-Backend.git
=======
   git remote add upstream https://github.com/JMatochePascual/Administrador-de-Productos-Backend.git
>>>>>>> e17948d3e3a0f02c9d725eece468637e9c3283f2
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
