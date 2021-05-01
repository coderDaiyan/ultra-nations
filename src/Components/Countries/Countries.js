import React from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Total Countries: {props.countries.length}
      </h1>
      <div className="countries">
        {props.countries.map((country) => (
          <Country key={country.alpha3Code} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
