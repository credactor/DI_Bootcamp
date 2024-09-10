// In this application we’re going receive data from two asynchronous sources.
// You will use :
//     This documentation: https://www.exchangerate-api.com/docs/overview
//     Create your own API key by signing up - you will be able to make more requests :)
// Note
//     The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.
//     First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint (https://www.exchangerate-api.com/docs/supported-codes-endpoint) from the ExchangeRate API documentation.
//     To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests (https://www.exchangerate-api.com/docs/pair-conversion-requests) from the ExchangeRate API documentation.
//         Hint: You could also supply an optional AMOUNT variable in the query of the request.
//     Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
//         Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

function fetchCurrencies() {
    fetch(`https://v6.exchangerate-api.com/v6/${key}/codes`)
        .then((res) => res.json())
        .then((res) => populateDropdown(res.supported_codes))
        .catch((error) => {
            console.error(error);
            summary.innerText = "Error!";
        });
}

function switchCurrencies () {
    [from.value, to.value] = [to.value, from.value];
    compute();
}

function populateDropdown (codes) {
    const entries = Object.entries(codes);
    for (const entry of entries) {
        const [index, [code, name]] = entry;
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        option.innerText = code + ", " + name;
        option2.innerText = code + ", " + name;
        option.value = code;
        option2.value = code;
        from.appendChild(option);
        to.appendChild(option2);
    }
}

async function compute() {
    const curr1 = from.value;
    const curr2 = to.value;
    const input = document.getElementById("input");
    const summary = document.getElementById("summary");
    const url = `https://v6.exchangerate-api.com/v6/${key}/pair/${curr1}/${curr2}`;
    try {
        const res = await fetch (url);
        const resJson = await res.json();
        const rate = resJson.conversion_rate;
        const amount = input.value;
        const total = amount * rate;
        summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;        
    } catch (error) {
        console.log(error);
        summary.innerText = "Error!";
    }
}

const key = 'ebe1eac63303a5c8bb6c86fa';
fetchCurrencies();
const from = document.getElementById("from");
const to = document.getElementById("to");
const switchb = document.getElementById("switchb");
const convert = document.getElementById("convert");

document.getElementById("input").addEventListener("keyup", compute);
from.addEventListener("change", compute);
to.addEventListener("change", compute);
convert.addEventListener("click", compute);
switchb.addEventListener("click", switchCurrencies);