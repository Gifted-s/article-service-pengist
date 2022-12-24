FROM node:12-alpine
WORKDIR /article-pengist-service
COPY package.json /article-pengist-service
RUN  npm install
COPY . /article-pengist-service
EXPOSE 4000
CMD ["node", "app.js"]
