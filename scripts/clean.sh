#!/usr/bin/env bash
# Clean project build files, cache, and dependencies
echo "Cleaning C# backend intermediate folders (bin/obj)..."
find . -type d \( -name "bin" -o -name "obj" \) -exec rm -rf {} + 2>/dev/null

echo "Cleaning React client node_modules and builds..."
rm -rf client/node_modules client/dist client/coverage client/dist-ssr 2>/dev/null

echo "Cleaning complete."
