# Use Puppeteer image as the base
FROM ghcr.io/puppeteer/puppeteer:19.7.2

# Set environment variables to skip Chromium download and specify executable path
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Create a new user and set it as the active user
RUN useradd -m appuser

# Switch to the new user
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

# Set the command to start the application
CMD ["node", "backend/index.js"]
