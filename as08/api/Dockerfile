FROM oven/bun:latest
# Install OpenSSL (required by Prisma for migrations)
RUN apt-get update && apt-get install -y openssl
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN bun install

# Copy application code
COPY . .

# Generate Prisma client
RUN bun run generate


EXPOSE 3001

CMD ["sh", "-c", "bun run migrate:deploy && bun run dev"]