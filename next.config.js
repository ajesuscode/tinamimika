/** @type {import('next').NextConfig} */
module.exports = {
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
