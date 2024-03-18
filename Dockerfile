FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install --verbose

COPY . .

RUN npm build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]