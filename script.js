const btcPriceElement = document.getElementById('osmo-price');

async function fetchOSMOPrice() {
    try {
        const response = await fetch('https://api.osmosis.zone/v1/prices/osmo'); // Updated to use Osmosis API
        const data = await response.json();
        const osmoPrice = parseFloat(data.price).toFixed(2); // Format the price
        document.getElementById('osmo-price').innerText = `OSMO: $${osmoPrice}`; // Update HTML element
        console.log(`OSMO Price: ${osmoPrice} USDT`);
    } catch (error) {
        document.getElementById('osmo-price').innerText = 'Error fetching OSMO price';
        console.error('Error fetching OSMO price:', error);
    }
}

async function fetchWBTCPrice() {
    try {
        const response = await fetch('https://api.osmosis.zone/v1/prices/wbtc'); // Updated to use Osmosis API for WBTC
        const data = await response.json();
        const wbtcPrice = parseFloat(data.price).toFixed(2); // Format the price
        document.getElementById('wbtc-price').innerText = `WBTC: $${wbtcPrice}`; // Update HTML element
        console.log(`WBTC Price: ${wbtcPrice} USDT`);
    } catch (error) {
        document.getElementById('wbtc-price').innerText = 'Error fetching WBTC price';
        console.error('Error fetching WBTC price:', error);
    }
}

setInterval(fetchOSMOPrice, 2000); // Update every second
setInterval(fetchWBTCPrice, 2000); // Update every second
fetchOSMOPrice(); // Initial fetch
fetchWBTCPrice(); // Initial fetch
