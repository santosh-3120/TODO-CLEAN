# Use official Node image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only package files first (cache install step)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all remaining backend files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
