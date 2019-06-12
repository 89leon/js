const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');

    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
  } catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);
  }
};

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

    return response.data.map(country => country.name);
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  let exchangeRate;
  let countries;

  await Promise.all([getExchangeRate(fromCurrency, toCurrency), getCountries(toCurrency)])
    .then(([exchangeRateValue, countriesValue]) => {
      exchangeRate = exchangeRateValue;
      countries = countriesValue;
    });

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
};

convertCurrency('USD', 'ILS', 100)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });
