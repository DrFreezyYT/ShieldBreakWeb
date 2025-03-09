# Use Node.js for better compatibility with Nuxt
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only necessary files, excluding node_modules and bun.lockb
COPY package*.json ./
COPY .gitignore ./
COPY .nuxt ./.nuxt
COPY app.vue ./
COPY nuxt.config.ts ./
COPY tsconfig*.json ./
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY server ./server

# Install dependencies
RUN npm install && npm run build && npm run generate

# Use a smaller base image for production
FROM nginx:alpine

# Copy the built static files from builder stage
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Expose port
EXPOSE 80

# Use nginx to serve static files
CMD ["nginx", "-g", "daemon off;"]