// Server packages 
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Dotenv package to use an environment variable file
require('dotenv').config();

// Import the Web3.js package
const Web3 = require('web3');

// Env variables, taken from the .env file.
const PORT = process.env.PORT || 5000
const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL

// Create a new Express app
const app = express();

// Set the JSON parser middleware to parse the body of incoming requests
app.use(express.json());

// Rate limiting, limit the amount of request a user can send within a spesific amount of time.
// With this set up the user can only make 100 request max every 10 minutes.
const limiter = rateLimit({
    WindowMs: 10 * 60 * 1000, // 10 minutes in ms.
    max: 100 // 100 request max.
})

app.use(limiter)
app.set('trust proxy', 1)

// Set static folder, this allows our server to pick up the html file in the src folder.
app.use(express.static('src'))

// Activate the next bit of code if you run your front end from a differenct address 
/*
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:3000`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});
*/

// Define a route that accepts POST requests to query the balance of an Ethereum address
app.post('/balance', async (req, res) => {
    // Get the Ethereum address from the request body
    const {
        address
    } = req.body;

    // Create a new Web3.js provider connected to the Ethereum RPC node
    const provider = new Web3.providers.HttpProvider(ETHEREUM_RPC_URL);

    // Create a new Web3.js instance
    const web3 = new Web3(provider);

    try {
        // Query the balance of the Ethereum address using the web3 instance
        const balanceHex = await web3.eth.getBalance(address);

        // Use the fromWei method to convert the balance hex value to a string in ether
        const balance = web3.utils.fromWei(balanceHex, 'ether');

        // Send the balance back in the response
        res.send({
            balance
        });
    } catch (error) {
        // If there was an error, send a 500 Internal Server Error response
        res.status(500).send({
            error: error.message
        });
    }
});

// Enable cors
app.use(cors());

// Start the Express app on port 5000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});