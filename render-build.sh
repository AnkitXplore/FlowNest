#!/bin/bash
echo "Building FlowNest for Render deployment..."

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd Frontend
npm install

# Build frontend
echo "Building frontend..."
npm run build

echo "Build completed successfully!"
ls -la dist/
