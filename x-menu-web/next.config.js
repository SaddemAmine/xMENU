/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // lessVarsFilePath: './styles/variables.less',
  // lessVarsFilePathAppendToEndOfContent: false,
  // cssLoaderOptions: {},

  webpack(config) {
    return config;
  },
  images: {
    domains: ['picsum.photos', 'images.ctfassets.net'],
  },
  reactStrictMode: true,
  swcMinify: true,
});
