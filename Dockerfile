FROM node:12
WORKDIR /src
RUN npm install ejs
CMD /bin/bash
