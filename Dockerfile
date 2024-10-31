# Use Puppeteer image as the base
FROM ghcr.io/puppeteer/puppeteer:19.7.2

# Set environment variables to skip Chromium download and specify executable path
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) for the backend
COPY backend/package*.json ./backend/

# Copy package.json for the frontend
COPY frontend/package*.json ./frontend/

# Install backend dependencies
RUN npm install --prefix ./backend

# Install frontend dependencies
RUN npm install --prefix ./frontend

# Install Puppeteer browsers (if needed)
RUN npx puppeteer install chrome

# Generate Prisma client
RUN npx prisma generate --schema=backend/prisma/schema.prisma

# Copy the rest of your application code
COPY . .

# Set the command to start the application
CMD ["node", "backend/index.js"]
