# Use node image as base
FROM node:21-alpine3.18 AS builder

# Set working directory
WORKDIR /app

#Environment variables.
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to start the application
CMD ["npm", "start"]