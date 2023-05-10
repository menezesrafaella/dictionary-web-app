import React, { useState, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";

import "./Home.scss";
import Searching from "../components/Searching";
import IconPlay from "../assets/icons/icon-play.svg";
import Content from "../components/Content";
import api from "../service/api";
import NoContent from "../components/NoContent";

const Home = () => {
  const [word, setWord] = useState("");
  const audioRef = useRef(null);

  function handleSearchWord(prop) {
    return api.get(prop).then((response) => setWord(response.data[0]));
  }

  const expression = {
    title: word.word,
    phonetic: word.phonetics,
    source: word.sourceUrls,
    meanings: word.meanings,
  };

  const pathAudios = expression?.phonetic
    ?.filter((a) => a.audio !== "")
    .map((a) => a.audio);
  const pathAudio = pathAudios && pathAudios[0];

  const playAudio = useCallback(() => {
    audioRef.current.play();
  }, [pathAudio]);

  const phonetics = expression?.phonetic?.map((p) => {
    return p.text;
  });
  const phonetic = phonetics && phonetics[0];

  return (
    <div className="Home">
      <div className="Home__content">
        <Navbar />
        <Searching onWord={handleSearchWord} />
        {word ? (
          <>
            <div className="Home__header">
              <div>
                <h1 className="Home__title">{expression.title}</h1>
                <span className="Home__header-highlight">{phonetic}</span>
              </div>
              <div>
                <audio
                  key={pathAudio}
                  ref={audioRef}                  
                >
                  <source src={pathAudio} type="audio/mp3" />
                </audio>
                <button className="Home__header-button" onClick={playAudio}>
                  <img src={IconPlay} alt="" />
                </button>
              </div>
            </div>
            <Content expression={expression} />
          </>
        ) : (
          <NoContent />
        )}
      </div>
    </div>
  );
};

export default Home;
