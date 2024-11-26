/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export as static files
  images: {
    unoptimized: true, // Disable image optimization (necessary for static export)
  },
  distDir: 'out', // Specify output directory for static export
  basePath: '/stocklyhubdev', // Set base path to your repository name
  assetPrefix: '/stocklyhubdev', // Ensure assets are referenced with the correct path
};

export default nextConfig;
