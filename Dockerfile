# Use an official Node.js runtime as a parent image
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use an Nginx image to serve the Angular application
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/helloworld /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
