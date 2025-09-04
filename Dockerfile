# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos los archivos de configuración desde la carpeta real del proyecto
COPY frontend/my-login-app/package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código de la aplicación
COPY frontend/my-login-app ./

# Construimos la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen de producción
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copiamos solo lo necesario de la etapa de build
COPY --from=builder /app ./

# Exponemos el puerto que Railway inyecta
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]