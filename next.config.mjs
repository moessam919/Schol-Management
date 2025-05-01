/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.pexels.com" }],
        domains: ["res.cloudinary.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
