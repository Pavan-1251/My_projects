# Trust-Vote: Blockchain-Based Voting System

A decentralized voting application built with Ethereum smart contracts and React.js that ensures secure, transparent, and tamper-proof voting.

## Features

- Secure voting through Ethereum blockchain
- User-friendly React interface
- MetaMask integration for wallet management
- Admin panel for candidate registration
- Real-time vote counting and results
- Prevents double voting
- Transparent and verifiable voting process

## Technology Stack

- **Smart Contracts**: Solidity
- **Blockchain Development**: Truffle Framework
- **Frontend**: React.js
- **Web3 Integration**: Web3.js
- **Local Blockchain**: Ganache
- **Wallet**: MetaMask

## Prerequisites

- Node.js (v12 or higher)
- Ganache
- MetaMask browser extension
- Truffle (`npm install -g truffle`)

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Trust-Vote
   ```

2. Install dependencies:
   ```bash
   # Install main project dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   ```

3. Start Ganache and configure MetaMask:
   - Open Ganache
   - Create a new workspace (if needed)
   - Connect MetaMask to Ganache:
     - Network Name: Ganache
     - RPC URL: http://127.0.0.1:7545
     - Chain ID: 5777
     - Currency Symbol: ETH

4. Deploy smart contracts:
   ```bash
   # From the root directory
   truffle migrate --reset
   ```

5. Start the application:
   ```bash
   # From the client directory
   npm start
   ```

6. Open http://localhost:3001 in your browser

## Usage

1. **Admin Setup**:
   - The account that deploys the contract becomes the admin
   - Only admin can register candidates

2. **Voting Process**:
   - Connect your MetaMask wallet
   - Choose a candidate
   - Confirm the transaction in MetaMask
   - Wait for transaction confirmation

3. **View Results**:
   - Navigate to the Results page
   - See real-time vote counts for each candidate

## Project Structure

```
Trust-Vote/
├── client/                 # React frontend
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
├── contracts/             # Smart contracts
│   └── Election.sol       # Main contract
├── migrations/            # Truffle migrations
├── test/                 # Contract tests
├── truffle-config.js     # Truffle configuration
└── package.json          # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Truffle Suite for the development framework
- OpenZeppelin for smart contract security patterns
- React community for frontend components and inspiration
