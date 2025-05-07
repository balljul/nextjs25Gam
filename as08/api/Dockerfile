FROM oven/bun:latest
RUN apt-get update && apt-get install -y nodejs npm
# Install OpenSSL (required by Prisma for migrations)
RUN apt-get update && apt-get install -y openssl postgresql-client
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

CMD ["sh", "-c", "bun install && until pg_isready -h db -p 5432; do echo 'Waiting for Postgres...'; sleep 1; done && prisma db push && bun run dev"]
