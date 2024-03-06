/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
  },
});
// https://placehold.co/600x400
