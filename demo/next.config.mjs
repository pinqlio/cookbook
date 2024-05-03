/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents : true,
  pageExtensions : ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts', 'api.js'],
  webpack : (config, nextConfig) => {
    const newConfiguration = config.plugins.push (new GenerateAwsLambda(nextConfig))
    return newConfiguration
  },
  i18n: {
    locales : ['en','de'],
    defaultLocale: 'en',
    localeDetection : true
  },
  env : {
    SECRET : process.env.SECRET
  },
  experimental : {
    appDir : true,
  },
};
// module.exports = nextConfig; 

