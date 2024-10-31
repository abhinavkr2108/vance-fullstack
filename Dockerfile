# Use Puppeteer image as the base
FROM ghcr.io/puppeteer/puppeteer:19.7.2

# Set environment variables to skip Chromium download and specify executable path
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Change ownership of the working directory to pptruser
USER root
RUN chown -R pptruser:pptruser /usr/src/app

# Switch back to pptruser for security
USER pptruser

# Install backend dependencies
RUN npm install

# Install Puppeteer browsers (if needed)
RUN npx puppeteer install chrome

# Generate Prisma client
RUN npx prisma generate --schema=prisma/schema.prisma

# Copy the rest of your application code
COPY --chown=pptruser:pptruser . .

# Set the command to start the application
CMD ["node", "index.js"]
