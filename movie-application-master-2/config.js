// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "9300",
}

module.exports = config;
