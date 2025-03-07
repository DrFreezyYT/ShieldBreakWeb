# Use the official Bun image for optimized performance
FROM oven/bun:latest as build

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb before installing dependencies
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application
COPY . .

# Build the Nuxt app
RUN bunx nuxt build

# Use a minimal runtime image
FROM node:21-alpine

# Set working directory in the new container
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app .

# Expose the application port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Run the Nuxt app
CMD ["bun", "run", "start"]