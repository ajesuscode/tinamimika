/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.ctfassets.net", "res.cloudinary.com"],
    },
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
    },
};
module.exports = nextConfig;
