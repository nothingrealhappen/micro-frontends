
FROM node:12.16-alpine

WORKDIR /app

COPY . ./

RUN ls

RUN ./runScript.sh

ENTRYPOINT [ "npm", "start" ] 

