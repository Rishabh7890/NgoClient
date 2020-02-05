// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "G7c0XpwOM30KrG1gY84mBCUWm",
  TWITTER_CONSUMER_SECRET: "wvDS1EvDhbGfsfuEqN7RLItM8U5S0QuAhh27z6n0Q8XOBsVSfq"
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
