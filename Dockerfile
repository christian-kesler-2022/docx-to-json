FROM node:16.17.0

WORKDIR /src

RUN npm install npm@latest --location=global
# RUN npm install -g nodemon
RUN npm install

COPY /src .

EXPOSE 3000/tcp

CMD ["node", "index.js"]
