#!/bin/bash
echo "Building FlowNest frontend for Render..."
cd Frontend
npm install
npm run build
echo "Build completed successfully!"
ls -la dist/
