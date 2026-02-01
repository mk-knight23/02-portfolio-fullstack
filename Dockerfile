# Build stage
FROM node:22-slim AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm clean-install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:22-slim

WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm clean-install --omit=dev

# Copy the built assets and server file
COPY --from=build /app/dist ./dist
COPY server.js ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
