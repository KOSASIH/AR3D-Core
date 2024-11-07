#!/bin/bash

# deploy.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
REPO_DIR="/path/to/your/repo"  # Change this to your repository path
BRANCH="main"                  # Change this to your deployment branch
NODE_ENV="production"          # Set the environment to production

# Navigate to the repository directory
cd $REPO_DIR

# Pull the latest code from the repository
echo "Pulling the latest code from the $BRANCH branch..."
git checkout $BRANCH
git pull origin $BRANCH

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Build the application (if applicable)
# Uncomment the next line if you have a build step
# npm run build

# Restart the server (using PM2 or any other process manager)
echo "Restarting the server..."
pm2 restart your-app-name  # Change this to your PM2 app name

echo "Deployment completed successfully!"
