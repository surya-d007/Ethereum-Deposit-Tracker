# Ethereum Deposit Tracker

## Objective

This project tracks and records ETH deposits to the Beacon Deposit Contract on the Ethereum blockchain.

## Project Structure

- `src/config/rpc.js`: Ethereum node connection using Alchemy.
- `src/services/tracker.js`: Core logic to track ETH deposits.
- `src/services/logger.js`: Logger utility for error handling and events.
- `src/app.js`: Main entry point for the project.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:

```bash
ALCHEMY_API_KEY=<YOUR_ALCHEMY_API_KEY>
ALCHEMY_NETWORK=ETH_MAINNET
BEACON_DEPOSIT_CONTRACT=0x00000000219ab540356cBB839Cbe05303d7705Fa
```
