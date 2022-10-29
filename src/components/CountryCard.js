import React from "react";

function CountryCard({ country, name, region }) {
  return (
    <div className="CountryCard">
      <h3>{country.name.common}</h3>
      <p>{country.region}</p>
      <p>{country.flag}</p>
      <p></p>
    </div>
  );
}

export default CountryCard;
