FROM node
COPY . /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
RUN yarn install
RUN yarn global add react-scripts
CMD [ "yarn", "start" ]