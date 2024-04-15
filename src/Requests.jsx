// Requests.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Options from "./Options";
function Requests() {
  const API_KEY = "7uRlKsXbLPxerwEpgZqrRddu2h9GMggPQdnhI2fr";
  const BASE_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`;

  const [ApiData, setApiData] = useState({});

  useEffect(() => {
    const getCurrency = async () => {
      const response = await axios.get(BASE_URL);
      const fullData = response.data.data;
      setApiData(fullData);
    };

    getCurrency();
  }, []);

  return (
    <>
      
      <Options ApiData={ApiData} />
    </>
  );
}

export default Requests;
