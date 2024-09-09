// src/config/rpc.js
require("dotenv").config();
const { Alchemy, Network } = require("alchemy-sdk");

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network[process.env.ALCHEMY_NETWORK], // Select mainnet or testnet based on .env
};

// Create the Alchemy instance
const alchemy = new Alchemy(settings);

module.exports = alchemy;
