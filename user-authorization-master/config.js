// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "3000",
  CLIENT_ID: process.env.CLIENT_ID || "c8bf2c0e4aad7631bdb8",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "64cdf11c4c68319e8d3770364267e31a838e8258" 
}

module.exports = config;
