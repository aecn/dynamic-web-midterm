import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

function Countries() {
    const [searchParams] = useSearchParams();

    const [countryData, setCountryData] = useState([]);
    const [country, setCountry] = useState([]);

    const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        const countryToQuery = searchParams.get("country") || country;
        setCountry(countryToQuery);
        axios
            .get(COUNTRIES_URL)
            .then(function(response) {
                console.log("response", response);
                setCountryData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                setCountryData([]);
            });
        }, []);

    return (
        <div>
            <h1>COUNTRIES</h1> 
            <Header />
            {countryData.map((country, i) => (
                <CountryCard country={country} key={i} />
            ))}
        </div>
    );
}

export default Countries;