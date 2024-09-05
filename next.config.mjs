/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://stellarvoyagers.vercel.app/:path*',
      },
    ]
  },

  images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "img.freepik.com"
        }
      ]
  }
};

export default nextConfig;
