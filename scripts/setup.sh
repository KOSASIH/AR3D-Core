#!/bin/bash

# setup.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
NODE_ENV="development"  # Set the environment to development

# Install Node.js and npm if not already installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Installing Node.js..."
    # For Ubuntu/Debian
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install MongoDB if not already installed
if ! command -v mongo &> /dev/null; then
    echo "MongoDB is not installed. Installing MongoDB..."
    # For Ubuntu/Debian
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
fi

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Create a .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat <<EOL > .env
MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=5000
CORS_ORIGIN=http://localhost:3000
JWT_SECRET=your_jwt_secret
EOL
fi

# Start MongoDB service
echo "Starting MongoDB service..."
sudo service mongod start

# Run database migrations or seed data if necessary
# Uncomment the next line if you have a migration/seed script
# npm run migrate

echo "Development environment setup completed successfully!"
