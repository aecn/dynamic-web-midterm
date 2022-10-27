import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import Header from "../components/Header";

// individual country & its artworks
function Country() {
    const [artData, setArtData] = useState([]); 
    const [art, setArt] = useState("Picasso");

    const URL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/437133`

    useEffect(() => {
        axios
            .get(URL)
            .then(function(response) {
                console.log("response", response);
                setArtData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                setArtData([]);
            });
    }, []);

    const {
        artistDisplayName,
        primaryImage,
        objectDate,
        objectName,
        period,
        title,
    } = useMemo(() => {
        return {
            artistDisplayName: artData.name,
            primaryImage: artData.primaryImage,
            objectDate: artData.objectDate,
            objectName: artData.objectName,
            period: artData.period,
            title: artData.title,
        };
    }, [artData]);

    console.log("artData", artData);

return (
        <div>
            <h1>INDIVIDUAL COUNTRY</h1>
            <Header />
            <ArtCard
            art={art}
            artistDisplayName={artistDisplayName}
            primaryImage={primaryImage}
            objectDate={objectDate} 
            objectName={objectName}
            period={period} 
            title={title}
            />
        </div>
    );
}

export default Country;