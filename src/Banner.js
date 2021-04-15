import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outline"
          className="banner_searchButton"
        >
          {showSearch ? "Hide" : "Click here to search dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h4>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h4>
        <Button onClick={() => history.push("./search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
