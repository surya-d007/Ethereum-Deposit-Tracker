// src/services/tracker.js
const alchemy = require("../config/rpc");
const { log, error } = require("./logger");

const BEACON_DEPOSIT_CONTRACT = process.env.BEACON_DEPOSIT_CONTRACT;

const trackDeposits = async () => {
  // Subscribe to new block events
  alchemy.ws.on("block", async (blockNumber) => {
    log(`New block detected: ${blockNumber}`);

    // Fetch block details along with transactions
    const block = await alchemy.core.getBlockWithTransactions(blockNumber);

    // Loop through transactions to check for deposits
    block.transactions.forEach((tx) => {
      log(`ETH deposit detected in transaction ${tx.hash}`);
      log(`Amount: ${tx.value.toString()}`);
      log(`Sender: ${tx.from}`);
      log(`Gas used: ${tx.gasUsed}`);
    });
  });

  // Error handling for failed API calls
  alchemy.ws.on("error", (err) => {
    error(`Alchemy WebSocket error: ${err.message}`);
  });
};

module.exports = {
  trackDeposits,
};
