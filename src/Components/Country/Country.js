import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Country.css";
import { Link } from "react-router-dom";

const Country = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const { name, flag, capital, alpha3Code } = props.country;
  return (
    <div className="country">
      <img className="" src={flag} alt="" />
      <h1>Name: {name}</h1>
      <h2>Capital: {capital}</h2>
      <div className={classes.root}>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/country/${alpha3Code}`}
        >
          <Button variant="contained" color="primary">
            More Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Country;
