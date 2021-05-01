import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./CountryDetail.css";

const CountryDetail = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const { alpha3Code } = useParams();

  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`).then((res) =>
      res.json().then((data) => setCountryDetail(data))
    );
  }, [alpha3Code]);

  const {
    name,
    alpha2Code,
    area,
    capital,
    flag,
    languages,
    currencies,
    nativeName,
    population,
    region,
    regionalBlocs,
  } = countryDetail;

  // console.log(countryDetail.languages[0].name);

  return (
    <>
      <div className="details">
        <img src={flag} alt="" />
        <h2>
          Name: {name}, Native Name: {nativeName}
        </h2>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population} Peoples</h3>
        <h3>Area: {area} Meter</h3>
        <h3>Region: {region}</h3>
        <h3>Language: {languages && languages[0].name}</h3>
        <h3>
          Currency: {currencies && currencies[0]?.name}, Symbol:{" "}
          {currencies && currencies[0]?.symbol}
        </h3>
        <h3>
          Regional BLOC: {regionalBlocs && regionalBlocs[0]?.name},
          {regionalBlocs && regionalBlocs[0]?.acronym}
        </h3>
        <h3>
          Code: {alpha2Code}, {alpha3Code}
        </h3>
        <Link
          to="/allCountries"
          style={{ color: "white", textDecoration: "none" }}
          className={classes.root}
        >
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CountryDetail;
