import { CssBaseline } from "@material-ui/core";
import React from "react";
import Banner from "/src/components/HeroBanner.js";
import Hero from "/src/components/Hero.js";

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Banner />
      <Hero />
    </React.Fragment>
  );
}

export default Home;
