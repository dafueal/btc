const btcPriceElement = document.getElementById('btc-price');

async function fetchBTCPrice() {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await response.json();
        const price = parseFloat(data.price).toFixed(2);
        btcPriceElement.innerText = `BTC: $${price}`;
    } catch (error) {
        btcPriceElement.innerText = 'Error fetching price';
        console.error('Error fetching BTC price:', error);
    }
}

setInterval(fetchBTCPrice, 1000); // Update every second
fetchBTCPrice(); // Initial fetch
