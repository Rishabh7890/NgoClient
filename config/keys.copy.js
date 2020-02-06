require("dotenv").config();

// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET
};

const MONGODB = {
  MONGODB_URI: `mongodb://localhost:27017/ngoLocalDB`
};

const SESSION = {
  COOKIE_KEY: "ngosecret"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
