# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set environment to production
ENV NODE_ENV=development

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the 3001 port
EXPOSE 3001

# Start the app
CMD ["npm", "start"]