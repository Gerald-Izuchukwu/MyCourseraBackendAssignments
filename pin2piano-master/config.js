// Get the config either from environment variables or pick the default
// The config should contain PORT and MONGO_URL properties
const config = {
    PORT: process.env.PORT || 4500,
    MONGO_URI : 'mongodb://localhost:27017/pinDB'

}

module.exports = config;