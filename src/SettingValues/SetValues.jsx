import React, { useState, useEffect } from "react";
import axios from "axios";

function SetValues({ fromCurrency, toCurrency, OnResponsedValue }) {
  const [amount, setAmount] = useState('');
  const [responsedData, setResponsedData] = useState('');

  useEffect(() => {
    const sendRequest = async () => {
      const API_KEY = "7uRlKsXbLPxerwEpgZqrRddu2h9GMggPQdnhI2fr";
      const BASE_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${toCurrency}&base_currency=${fromCurrency}`;
      const response = await axios.get(BASE_URL);
      setResponsedData(response.data);
    };

    sendRequest();
  }, [fromCurrency, toCurrency]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setAmount(inputValue);

    if (responsedData && inputValue !=='' && !isNaN(inputValue)) {
      const calculatedValue = (responsedData.data[toCurrency] * parseFloat(inputValue)).toFixed(2);
      OnResponsedValue(calculatedValue);
    }
    else if(inputValue===''){
      OnResponsedValue('')
    }
  };

  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        className="firstInput"
        placeholder="0.00"
      />
    </>
  );
}

export default SetValues;
