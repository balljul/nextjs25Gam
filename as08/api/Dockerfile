FROM oven/bun:latest
# Install OpenSSL (required by Prisma for migrations)
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
# Ensure local binaries (e.g. prisma) are in PATH
ENV PATH="/app/node_modules/.bin:$PATH"

# Install dependencies
COPY package.json ./
RUN bun install

# Copy application code
COPY . .

# Generate Prisma client
RUN bun run generate


EXPOSE 3001

CMD ["sh", "-c", "bun install && bun run migrate:deploy && bun run dev"]