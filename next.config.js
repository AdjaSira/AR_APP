
const nextConfig = {
  webpack: (config, { isServer }) => {
    
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: 'gltf-webpack-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
