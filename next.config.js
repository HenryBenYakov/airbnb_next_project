/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    MapboxAccessToken: 'pk.eyJ1IjoiaGVucnliZW55YWtvdiIsImEiOiJjbDQxa2xmbTgxOGdvM2JtazN1cjVrdGpuIn0.5H3AAox5IEim7p4BPd1MDA'
  }
}

module.exports = nextConfig
