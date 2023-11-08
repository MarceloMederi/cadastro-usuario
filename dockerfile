# Use uma imagem leve do Node.js como base
FROM node:14-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos HTML, CSS e JavaScript para o diretório de trabalho
COPY . .

# Instale as dependências do Node.js (se houver algum)
# Se você não tem dependências Node.js, pode remover esta linha
RUN npm install

# Exponha a porta 3000 (ou a porta que o seu aplicativo usa)
EXPOSE 3000

# Comando para iniciar o seu aplicativo
CMD ["node", "server.js"]
