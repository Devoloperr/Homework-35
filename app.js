const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];
let theadArr = ["Name", "Ticker", "Value", "Change"]
let theadTr = document.querySelector("thead tr")
let tbody = document.querySelector("tbody")
theadArr.map(thead => {
    let th = document.createElement("th");
    th.innerText = thead;
    theadTr.append(th)
})
data.map(line => {
    console.log(line);
    let tr = document.createElement("tr");
    tr.innerHTML = `
<td>${line.name}</td>
<td>${line.ticker}</td>
<td>${line.value}</td>
<td>${line.change}</td>
`
    tbody.append(tr);
})

let lastTd = document.querySelectorAll("td:last-child")
lastTd.forEach(td => {
    let num = td.innerText.replace("%", "")
    if (num < 0) {
        td.classList.add("red")
    } else {
        td.classList.add("green")
    }
})
