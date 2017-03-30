FROM node:7.7.4

ENV project-name compliance-client-app

WORKDIR /tmp/${project-name}

COPY . /tmp/${project-name}/

RUN npm install webpack -g --loglevel warn

RUN npm install --loglevel warn
RUN npm run build --loglevel warn

WORKDIR /data/${project-name}
RUN cp -r /tmp/${project-name}/dist/. /data/${project-name}/
VOLUME ["/data/${project-name}"]
