# Seteaza imaginea de baza
FROM node:18

# Seteaza directorul de lucru în container
WORKDIR /app

# Copiaza fisierele proiectului în container
COPY package*.json ./
RUN npm install

COPY . .

# Expune portul aplicatiei
EXPOSE 3000

# Comanda pentru rularea aplicației
CMD ["node", "Script/server.js"]
