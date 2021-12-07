FROM node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY models ./models/
COPY routes ./routes/
COPY server ./server/
CMD ["node", "/app/server/server.js"]