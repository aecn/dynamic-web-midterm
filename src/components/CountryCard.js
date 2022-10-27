import React from "react";

function CountryCard ({
    country,
    name,
}) {
    return (
        <div className="CountryCard">
            <h2>{country.name.common}</h2>
            <h3>{country.region}</h3>
        </div>
    );
}

export default CountryCard;