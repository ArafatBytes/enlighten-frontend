// Custom build script for Netlify
const { execSync } = require('child_process');

console.log('Starting custom Netlify build script...');

// Set environment variables for build
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NODE_OPTIONS = '--max_old_space_size=4096';
process.env.NODE_ENV = 'production';

try {
  // Run the Next.js build directly
  console.log('Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
