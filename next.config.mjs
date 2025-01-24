/** @type {import('next').NextConfig} */

//STATIC EXPORT
const nextConfig = {
  output: 'export',
  // reactStrictMode: true,
  // swcMinify: true, // Ustawienie na true
};

// DYNAMIC EXPORT
// import path from 'path';
// import {fileURLToPath} from 'url';
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory
// const nextConfig = {
//   // output: "export",
//   reactStrictMode: true,
//   swcMinify: true, // Ustawienie na true

//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   webpack: (config, {isServer}) => {
//     config.resolve.alias['@'] = path.resolve(__dirname);

//     if (!isServer) {
//       config.optimization.splitChunks = {
//         cacheGroups: {
//           default: false,
//         },
//       };
//     }

//     return config;
//   },
// };

export default nextConfig;
