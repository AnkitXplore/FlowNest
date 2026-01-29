#!/bin/bash
echo "Starting build process..."
cd Frontend
echo "Installing dependencies..."
npm install
echo "Building frontend..."
npm run build
echo "Build completed!"
echo "Contents of dist directory:"
ls -la dist/
