import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

// list of 5 countries
function Countries() {
    const [countryData, setCountryData] = useState([]);
    //const [country, setCountry] = useState("Italy");
    //const [searchParams] = useSearchParams();
    const URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        //const countryToQuery = searchParams.get("country") || country;
        //setCountry(countryToQuery);
        axios
            .get(URL
                //`https://restcountries.com/v3.1/all`
            )
            .then(function(response) {
                console.log("response", response);
                setCountryData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                setCountryData([]);
            });
    }, []);

console.log("countryData", countryData);


    //const {
        //continents,
        //name,
    //} = useMemo(() => {
        //const countryMain = countryData || {};
        //return { 
            //name: countryData.name.common,
            //continents: countryData.continents,
    //};
//}, []); //countryData inside

    return (
        <div>
            <h1>COUNTRIES</h1>  
            {countryData.map((country, i) => (
                <CountryCard country={country} key={i} />
            ))}
                <Header />
        </div>
    );
}

export default Countries;