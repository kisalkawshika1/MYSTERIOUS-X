FROM fusuf/whatsasena:latest

RUN git clone https://github.com/kisalkawshika1/MYSTERIOUS-X /root/MYSTERIOUS-X
WORKDIR /root/MYSTERIOUS-X
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
