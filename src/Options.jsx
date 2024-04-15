import React from 'react';

function Options({ ApiData}) {
    if (!ApiData) {
        return null; 
    }

    const changeCurrency = (e) =>{
        console.log(e.target.value)
      }

    return (
        <>
            {Object.entries(ApiData).map(([currency, value]) => (
                <option key={currency} value={value}>
                    {currency}
                </option>
            ))}
        </>
    );
}

export default Options;
