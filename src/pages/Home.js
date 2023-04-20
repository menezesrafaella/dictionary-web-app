import React from "react";
import Navbar from "../components/Navbar";

import "./Home.scss";
import Searching from "../components/Searching";
import Title from "../components/Title";
import IconPlay from "../assets/icons/icon-play.svg";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__content">
        <Navbar />
        <Searching />
        <div className="Home__header">
          <div>
            <Title />
            <span className="Home__header-highlight">/ˈkiːbɔːd/</span>
          </div>
          <button className="Home__header-button" type="submit">
            <img src={IconPlay} alt="" />
          </button>
        </div>
          <Content />
      </div>
    </div>
  );
};

export default Home;
