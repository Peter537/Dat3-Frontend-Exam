/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

function Async() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountry("dk")
      .then((data) => {
        setCountry(data[0].name.common);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function fetchCountry(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <div>
      <h1>Async</h1>
      <p>{country}</p>
    </div>
  );
}

export default Async;
