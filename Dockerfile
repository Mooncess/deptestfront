FROM node:18-alpine
WORKDIR /react-frontdeptest/
COPY public/ /react-frontdeptest/public
COPY src/ /react-frontdeptest/src
COPY package.json /react-frontdeptest/
RUN npm install
CMD ["npm", "start"]