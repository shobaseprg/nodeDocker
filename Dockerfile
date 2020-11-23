FROM node:12
WORKDIR /src
RUN npm install ejs\
  express-validator\
  express-session
CMD /bin/bash
