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

async function fetchOSMOPrice() {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=OSMOUSDT');
        const data = await response.json();
        const osmoPrice = parseFloat(data.price).toFixed(2); // Format the price
        document.getElementById('osmo-price').innerText = `OSMO: $${osmoPrice}`; // Update HTML element
        console.log(`OSMO Price: ${osmoPrice} USDT`);
    } catch (error) {
        console.error('Error fetching OSMO price:', error);
    }
}

setInterval(fetchBTCPrice, 2000); // Update every second
setInterval(fetchOSMOPrice, 2000); // Update every second
fetchBTCPrice(); // Initial fetch
fetchOSMOPrice();
