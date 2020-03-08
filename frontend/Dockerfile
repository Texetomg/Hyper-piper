FROM node:12.16.1-alpine3.9
WORKDIR /frontend
COPY . /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
ADD package.json /package.json
COPY package.json /frontend/package.json
RUN npm install --save --silent
RUN npm install react-scripts@latest -g --silent
CMD ["npm", "start"]