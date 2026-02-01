# Build stage
FROM node:22-slim AS build

# Install build dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy project files and build
COPY . .
RUN npm run build

# Production stage
FROM node:22-slim

WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm install --omit=dev

# Copy built assets and server
COPY --from=build /app/dist ./dist
COPY server.js ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Cloud Run expects the container to listen on 0.0.0.0
# EXPOSE is mainly for documentation
EXPOSE 8080

# Use array form for CMD, ensure it's simple
CMD ["node", "server.js"]
