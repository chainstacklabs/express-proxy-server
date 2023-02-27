async function fetchBalance() {

    // Proxy server URL
    const url = 'http://localhost:5000/balance';

    // initialize the html element where the balance will be displayed in the front end
    let displayBalance = document.getElementById("balance")

    // The Ethereum address to query picked up from the front end
    const address = document.getElementById("address").value
    console.log(`Address to query: ${address}`)

    // Send a POST request to the proxy server to query the balance
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ address })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(`The balance is: ${data.balance} ETH`);

        // Slice the response to only show the first 6 numbers
        const slicedBalance = data.balance.slice(0, 7)

        // Display the balance in the front end
        displayBalance.innerHTML = `Balance: ${slicedBalance} ETH`
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
}
