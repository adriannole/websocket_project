# Usa la imagen base de Node.js
FROM node:18-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
COPY app/ ./app/

# Instala las dependencias
RUN npm install

# Expone el puerto del servidor
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "start"]
