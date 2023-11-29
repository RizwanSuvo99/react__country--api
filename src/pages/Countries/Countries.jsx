/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "../../component/Country/Country";
import "./Countries.css";

export default function Countries() {
  let [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries">
      <h1>Total Countries:{countries.length} </h1>
      <div className="country">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
}
