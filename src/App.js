import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home countries={countries} />
            <h1 style={{ textAlign: "center" }}>Welcome To Ultra Nations!</h1>
            <Countries countries={countries} />
          </Route>
          <Route path="/allCountries">
            <Home />
            <Countries countries={countries} />
          </Route>
          <Route path="/country/:alpha3Code">
            <Home />
            <CountryDetail countries={countries} />
          </Route>
          <Route exact path="/">
            <Home countries={countries} />
            <h1 style={{ textAlign: "center" }}>Welcome To Ultra Nations!</h1>
            <Countries countries={countries} />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
