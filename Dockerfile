# Use Puppeteer image as the base
FROM ghcr.io/puppeteer/puppeteer:19.7.2

# Set environment variables to skip Chromium download and specify executable path
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable \
    PUPPETEER_HEADLESS=true

# Ensure commands are run as root to have the necessary permissions
USER root

# Install necessary dependencies for running Puppeteer in headless mode
# RUN apt-get update && apt-get install -y \
#     wget \
#     ca-certificates \
#     fonts-liberation \
#     libappindicator3-1 \
#     libasound2 \
#     libatk-bridge2.0-0 \
#     libatk1.0-0 \
#     libcups2 \
#     libdbus-1-3 \
#     libgdk-pixbuf2.0-0 \
#     libnspr4 \
#     libnss3 \
#     libxcomposite1 \
#     libxdamage1 \
#     libxrandr2 \
#     xdg-utils \
#     --no-install-recommends && \
#     rm -rf /var/lib/apt/lists/*

# Create a new user and set it as the active user
RUN useradd -m appuser

# Switch to the new user for subsequent commands
USER appuser

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY --chown=appuser:appuser package*.json ./

# Install backend dependencies
RUN npm install

# Install Puppeteer browsers (if needed)
RUN npx puppeteer install chrome

# Copy the rest of your application code
COPY --chown=appuser:appuser . .

# Generate Prisma client (adjusted schema path)
RUN npx prisma generate --schema=backend/prisma/schema.prisma
