/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ytimg.com'],
    },
    env: {
        NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    }
};

export default nextConfig;
