import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVICE_ID: "service_fl9tx7e",
    TEMPLATE_ID: "template_yego6nw",
    PUBLIC_KEY: "9UH7EmkMzyrOpuGGT",
  },
  /* config options here */

};

module.exports = {
  env: {
    SERVICE_ID: "service_fl9tx7e",
    TEMPLATE_ID: "template_yego6nw",
    PUBLIC_KEY: "9UH7EmkMzyrOpuGGT",
  },
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  //trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  //skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
};

export default nextConfig;
