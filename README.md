# Base de datos
- Activar WSL (subsistema de linux para windows)
- Instalar docker
- Utilizar el comando "docker compose up" en el directorio raiz para colocar en linea la base de datos

# Express
- Instalar NPM
- en el directorio raiz utilizar el comando "npm install" para que se instalen todas las dependencias
- para colocar en linea un servidor de prueba utilizar el comando "npm run live"

## Creacion de tablas y Datos de prueba
- Para crear las tablas correr el comando "npx sequelize-cli db:migrate:all"
- Para utilizar 100 registros de datos prueba correr el comand "npx sequelize-cli db:seed:all" 