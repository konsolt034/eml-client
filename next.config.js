/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  basePath: "/eml-client", // Replace with your GitHub repository name
  assetPrefix: "/eml-client/",
  output: "export",
};

module.exports = nextConfig;
