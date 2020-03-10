FROM node:12.16.1-alpine3.9
WORKDIR /backend
COPY . /backend
ENV PATH /backend/node_modules/.bin:$PATH
ADD package.json /package.json
COPY package.json /backend/package.json
RUN npm install --save --silent
CMD ["npm", "run", "server"]