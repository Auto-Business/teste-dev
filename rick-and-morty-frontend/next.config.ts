/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove a seção compiler já que estamos usando Babel
  // Mantém as configurações de rewrite existentes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/:path*', // URL do backend
      },
    ];
  },
  experimental: {
    // Desabilita otimizações que podem conflitar com Babel
    forceSwcTransforms: false,
    swcMinify: false,
  },
  webpack: (config: any) => {
    // Mantém configurações webpack existentes
    return config;
  },
  compiler: {
    // Habilita o compilador SWC
    swc: true
  }
};

module.exports = nextConfig;
