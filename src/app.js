// src/app.js
const { trackDeposits } = require("./services/tracker");
const { log } = require("./services/logger");

// Start the Ethereum deposit tracker
const startTracking = async () => {
  log("Starting Ethereum Deposit Tracker...");
  await trackDeposits();
};

startTracking();
