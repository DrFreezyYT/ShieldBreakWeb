# Use the official Bun image for optimized performance
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb before installing dependencies
COPY package.json bun.lockb nuxt.config.ts tsconfig.json ./
COPY components/ components/
COPY pages/ pages/
COPY public/ public/
COPY server/ server/

# Install dependencies using Bun
RUN bun install && bun add consola && bun run build && bun run generate

# Expose the application port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Run the Nuxt app
CMD ["bunx", "serve", ".output/public"]