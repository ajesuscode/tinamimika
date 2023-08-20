/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.ctfassets.net", "res.cloudinary.com"],
    },
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
    },
    localePath: path.resolve("./public/locales"),
};
module.exports = nextConfig;
