FROM oven/bun:latest
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN bun install

# Copy application code
COPY . .

EXPOSE 3000

CMD ["bun", "run", "dev"]