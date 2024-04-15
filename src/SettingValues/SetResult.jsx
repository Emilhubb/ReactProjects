import React, { useEffect, useState } from 'react';

function SetResult({ toCurrency, fromCurrencyValue, result}) {


    return (
        <input 
            type="text"
            value={result}
            className="resultInput"
            placeholder="0.00"
            readOnly
        />
    );
}

export default SetResult;
