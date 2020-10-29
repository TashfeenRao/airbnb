import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Banner.css";
import Search from "./Search";

export default function Banner() {
  const [showDate, setShowDate] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">
        {showDate && <Search />}
        <Button
          variant="outlined"
          onClick={() => setShowDate(!showDate)}
          className="banner__searchButton"
        >
          {showDate ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and Strech your Imagination</h1>
        <h5>
          Plan a different kind of gateway to Uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore NearBy</Button>
      </div>
    </div>
  );
}
