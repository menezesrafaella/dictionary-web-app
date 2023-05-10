import { Divider } from "antd";
import React from "react";

import "./Content.scss";

const Content = ({ expression }) => {

  return (
    <section className="Content">
      {expression.meanings ? (
        <div>
          {expression.meanings.map((e, index) => (
            <div key={index}>
              <Divider orientation="left">{e.partOfSpeech}</Divider>
              <h4 className="Content__subtitle">Meaning</h4>
              <div className="Content__description">
                <ul>
                  {e.definitions.map((d, index) => (
                    <li key={index}>{d.definition}</li>
                  ))}
                </ul>
              </div>
              {e.synonyms.lenght ? (
                <p className="Content__more-info">
                  <span className="Content__subtitle">Synonyms</span>
                  {e.synonyms.join(",")}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      <div>
        <span className="Content__subtitle">Source</span>{" "}
        <span>{expression.source}</span>
      </div>
    </section>
  );
};

export default Content;
