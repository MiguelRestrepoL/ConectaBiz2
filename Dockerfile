# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos los archivos de configuración para aprovechar el cache
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Construimos la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen de producción
FROM node:18-alpine AS runner
WORKDIR /app

# Definimos la variable de entorno a producción
ENV NODE_ENV=production

# Copiamos todo desde la etapa de build
COPY --from=builder /app ./

# Exponemos el puerto en el que la aplicación correrá (Railway inyecta el valor en la variable PORT)
EXPOSE 9090

# Comando para iniciar la aplicación
CMD ["npm", "start"]
