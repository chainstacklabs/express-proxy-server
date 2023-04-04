<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> •
  <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Proxy server for RPC endpoint using Express

This project shows how to protect your RPC URL by creating a back-end server where you store the endpoint. Then, when you click the button to check the balance, the front end will send a request to the back-end server using the `eth_getBalance` method via the `web3.js` library. 

Read the full guide on the Chainstack developer portal:
* [How to store your Web3 DApp secrets: Guide to environment variables](https://docs.chainstack.com/docs/how-to-store-your-web3-dapp-secrets-guide-to-environment-variables)

## Project details

For this use case, we built a simple app that allows you to input an Ethereum address and returns the address balance by sending an `eth_getBalance` request to an Ethereum node.

It is built using the `Express.js` framework, and the main server code is in the `index.js` file that you can find in the root directory.

## Quickstart

Clone the repository:

```sh
git clone https://github.com/soos3d/node-proxy-server-to-protect-your-rpc-url-endpoint.git
```

Edit the `.env.sample` file to include your node RPC URL key and rename it to `.env`.

```env
ETHEREUM_RPC_URL="YOUR_CHAINSTACK_NODE_URL"
```

Install  dependencies:

```sh
npm install
```

Run the server in dev mode with:

```sh
npm run dev
```

The server is now running on `http://localhost:4000/`. You can send balance requests to your server with the following:

```sh
curl --location 'http://localhost:4000/balance' \
--header 'Content-Type: application/json' \
--data '{"address":"0xc457C11e2d7b6Ed68516CdED897c2Ab9F41e022C"}'
```

You will also find a basic front end in the `src` directory. You can run it in your browser and test the proxy server.

1. Insert the address you want to query in the input field.
1. Click **Check balance** to send a request to your RPC node and retrieve the address' balance.

If you check the source code from the browser, you won't be able to find the API key used! 

## Prerequisites

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* A node RPC endpoint.

Deploy a node with Chainstack:

1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).  
1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).  
1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials). 
