import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

const COUNTRIES_URL = "https://restcountries.com/v3.1/name/singapore";
const ARTICLES_URL = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=2a17539f75eb49f394ad222bd7f47da7`;

function Country() {
    const {country} = useParams();
    const {article} = useParams();
    const [countryData, setCountryData] = useState([]);
    const [articleData, setArticleData] = useState([]);

    console.log("articles", articleData);
    console.log("countries", countryData);

// first API
    useEffect(() => {
        axios
            .get(`${COUNTRIES_URL}`)
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
        axios
            .get(`${ARTICLES_URL}`)
            .then(function(response) {
                console.log("response", response);
                setArticleData(response.data);
            })
            .catch(function(error) {
                console.log("error", error);
                setArticleData([]);
            });
    }, [article]);

    const {
        description,
        publishedAt,
        title,
    } = useMemo(() => {
        return {
            description: articleData.articles[0].description,
            publishedAt: articleData.articles[0].publishedAt,
            title: articleData.articles[0].title,
        };
    }, [articleData]);

 return (
        <div>
            <Header />
            {countryData.map((country, i) => (
                <CountryCard country={country} key={i} />
            ))}
                <ArticleCard
                    description={description}
                    publishedAt={publishedAt} 
                    title={title}
                />
        </div>
    );
}

export default Country;