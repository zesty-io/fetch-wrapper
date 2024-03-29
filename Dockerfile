FROM node:16.16.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm set-script prepare "" && npm install && npm cache clean --force

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


CMD [ "npm", "start" ]

