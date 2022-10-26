import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import { COUNTRY_ACCESS_KEY, COUNTRY_SECRET_KEY } from "../API_KEYS";

// list of some countries
function Countries() {

    //const [countryData, setCountryData] = useState([])
    // make query for all cities

    useEffect(() => {
        axios
            .get(
                `https://api.roadgoat.com/api/v2/destinations/auto_complete&key=barcelona&${COUNTRY_SECRET_KEY}`
            )
            .then(function(response) {
                console.log("response", response);
                //setCountryData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                //console.warn(error);
                //setCountryData([]);
            });
    }, []);

    //console.log("countryData", countryData);

    return (
        <div>
            <h1>Countries</h1>
            {/* { countryData.map((country, i) => (
                <CountryCard city={country} key={i} />
            ))} */}
        </div>
    );
}

export default Countries;