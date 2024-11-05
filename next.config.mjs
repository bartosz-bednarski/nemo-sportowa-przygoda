/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: false,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
//   webpack: (config, { isServer }) => {
//     // Definiowanie aliasu "@" na główny katalog projektu
//     config.resolve.alias["@"] = path.resolve(__dirname);

//     // Jeśli nie jest to serwer, wyłącz wielowątkowość dla Webpacka
//     if (!isServer) {
//       config.optimization.splitChunks = {
//         cacheGroups: {
//           default: false,
//         },
//       };
//       config.optimization.minimizer = [];
//     }

//     return config;
//   },
// };
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true, // Ustawienie na true

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname);

    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }

    return config;
  },
};

export default nextConfig;
