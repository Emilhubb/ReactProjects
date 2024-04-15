import React from "react";

function Flags({currencyCode}) {

   const flags = [
    {
      id: 1,
      code: "AUD",
      flag: "https://www.cia.gov/the-world-factbook/static/b3526e3d199489a9690b9ab17966c5b4/f0719/AS-flag.jpg",
    },
    {
      id: 2,
      code: "BGN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    },
    {
      id: 3,
      code: "BRL",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    },
    {
      id: 4,
      code: "CAD",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png",
    },
    {
      id: 5,
      code: "CHF",
      flag: "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: 6,
      code: "CNY",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
      id: 7,
      code: "CZK",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    },
    {
      id: 8,
      code: "DKK",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
    },
    {
      id: 9,
      code: "EUR",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    },
    {
      id: 10,
      code: "GBP",
      flag: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
    },
    {
      id: 11,
      code: "HKD",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/640px-Flag_of_Hong_Kong.svg.png",
    },
    {
      id: 12,
      code: "HRK",
      flag: "https://www.currencyuk.co.uk/wp-content/uploads/2021/07/Croatia-flag-iStock-502012754.jpg",
    },
    {
      id: 13,
      code: "HUF",
      flag: "https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg",
    },
    {
      id: 14,
      code: "IDR",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: 15,
      code: "ILS",
      flag: "https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg",
    },
    {
      id: 16,
      code: "INR",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 17,
      code: "ISK",
      flag: "https://cdn.britannica.com/85/1485-050-2819302A/Flag-Iceland.jpg",
    },
    {
      id: 18,
      code: "JPY",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png",
    },
    {
      id: 19,
      code: "KRW",
      flag: "https://cdn.britannica.com/49/1949-004-8818300C/Flag-South-Korea.jpg",
    },
    {
      id: 20,
      code: "MXN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mexico.jpg/1200px-Flag_of_Mexico.jpg",
    },
    {
      id: 21,
      code: "MYR",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png",
    },
    {
      id: 22,
      code: "NOK",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png",
    },
    {
      id: 22,
      code: "NZD",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
    },
    {
      id: 23,
      code: "PHP",
      flag: "https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg",
    },
    {
      id: 24,
      code: "PLN",
      flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    },
    {
      id: 25,
      code: "RON",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png",
    },
    {
      id: 26,
      code: "RUB",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    },
    {
      id: 27,
      code: "SEK",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    },
    {
      id: 28,
      code: "SGD",
      flag: "https://cdn.britannica.com/36/4036-050-37052A78/Flag-Singapore.jpg",
    },
    {
      id: 29,
      code: "THB",
      flag: "https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg",
    },
    {
      id: 30,
      code: "TRY",
      flag: "https://jetpunk.b-cdn.net/img/user-photo-library/34/345919ccec-450.png",
    },
    {
      id: 31,
      code: "USD",
      flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      id: 32,
      code: "ZAR",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png",
    },
  ];
  const selectedFlags = flags.filter((flag) => flag.code === currencyCode);

  if (selectedFlags.length === 0) {
    const currencyCode = 'Null'
  }
  const selectedFlag = selectedFlags[0]
  return (
    <>
          {selectedFlag ? <img src={selectedFlag.flag} alt={selectedFlag.code} /> : null}

    </>
  );
}

export default Flags;

