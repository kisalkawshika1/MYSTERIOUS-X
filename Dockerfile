FROM fusuf/whatsasena:latest

RUN git clone https://github.com/kisalkawshika1/MYSTERIOUS-X /root/MYSTERIOUS-X
WORKDIR /root/MYSTERIOUS-X/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install

CMD ["node", "bot.js"]
