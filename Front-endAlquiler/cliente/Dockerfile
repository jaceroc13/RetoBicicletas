FROM node:lts-stretch-slim as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
#RUN npm run build
RUN npm run build
EXPOSE 4202

CMD ["npm", "start"]