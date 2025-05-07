FROM oven/bun:latest
RUN apt-get update && apt-get install -y nodejs npm
# Set working directory
WORKDIR /app
# Ensure local binaries (e.g. next) are in PATH
ENV PATH="/app/node_modules/.bin:$PATH"

# Install dependencies
COPY package.json ./
RUN bun install

# Copy application code
COPY . .

EXPOSE 3000

CMD ["sh", "-c", "bun install && bun run dev"]
