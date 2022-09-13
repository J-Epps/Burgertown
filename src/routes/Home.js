import { CssBaseline } from "@material-ui/core";
import React from "react";
import Banner from "../components/HeroBanner";
import Hero from "../components/Hero.js";

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
