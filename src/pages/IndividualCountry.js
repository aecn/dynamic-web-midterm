import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

// individual country & it artworks
function Country() {
    //const { name } = UseParams();
    const [countryData, setCountryData] = useState({});
    const [artData, setArtData] = useState({}); 

    useEffect(() => {
        axios
            .get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects`
                )
            .then((response) => {
                console.log({response});
            })
            .catch((error) => {
                console.log({error});
            });
    }, []);

    return (
        <div>
            <h1>Individual Country</h1>
        </div>
    );
}

export default Country;