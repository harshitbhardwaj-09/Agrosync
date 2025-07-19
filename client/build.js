import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting build process...');

try {
  // Check if vite is available
  console.log('Checking vite availability...');
  execSync('npx vite --version', { stdio: 'inherit' });
  
  // Run the build
  console.log('Running vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 