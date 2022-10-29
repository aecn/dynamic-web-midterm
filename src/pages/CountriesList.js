import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

function Countries() {
  const [searchParams] = useSearchParams();

  const [countryData, setCountryData] = useState([]);
  const [country, setCountry] = useState([]);

  const [articleData, setArticleData] = useState([]);
  const [article, setArticle] = useState([]);

  const COUNTRIES_URL = "https://restcountries.com/v3.1/all";
  const ARTICLES_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2a17539f75eb49f394ad222bd7f47da7`;

  useEffect(() => {
    axios
      .get(COUNTRIES_URL)
      .then(function (response) {
        console.log("response", response);
        setCountryData(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
        setCountryData([]);
      });
  }, []);

  return (
    <div>
      <h1>INTERNATIONAL NEWS</h1>
      <Header />
      {countryData.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}
    </div>
  );
}

export default Countries;
