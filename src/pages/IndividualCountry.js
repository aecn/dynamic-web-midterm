import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";

const COUNTRIES_URL = "https://restcountries.com/v3.1/all";
const ARTICLES_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2a17539f75eb49f394ad222bd7f47da7`;

function Country() {
    const { country } = useParams();
    const [countryData, setCountryData] = useState([]);
    const [articleData, setArticleData] = useState([]);

    console.log("articles", articleData);

// first API
    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/all`)
            .then(function(response) {
                console.log("response", response);
                setCountryData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                setCountryData([]);
            });
    }, [country]);

// second API
    useEffect(() => {
        axios.get(`${ARTICLES_URL}`).then((response) => {
            setArticleData(response.data)
        }).catch((error) => {
            setArticleData([])
    })
    }, [countryData]);

 return (
        <div>
            <Header />
            <ArticleCard />
        </div>
    );
}

export default Country;