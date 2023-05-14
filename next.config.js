// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    webpack: (config) => {
      config.resolve.modules.push(__dirname);
      return config;
    },
  };