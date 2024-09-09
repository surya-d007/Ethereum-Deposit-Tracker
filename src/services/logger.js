// src/services/logger.js
const log = (message) => {
  console.log(`[INFO]: ${message}`);
};

const error = (errMessage) => {
  console.error(`[ERROR]: ${errMessage}`);
};

module.exports = {
  log,
  error,
};
