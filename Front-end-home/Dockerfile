FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm i -f

# Generate the build of the application
#RUN npm run build
RUN npm run build
EXPOSE 4200

CMD ["npm", "start"]