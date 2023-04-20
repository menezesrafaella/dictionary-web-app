import { Divider } from "antd";
import React from "react";

import "./Content.scss";

const Content = () => {
  return (
    <section className="Content">
      <Divider orientation="left">noun</Divider>
      <h4 className="Content__subtitle">Meaning</h4>
      <div className="Content__description">
        <ul>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>
      <p className="Content__more-info">
        <span className="Content__subtitle">Synonyms</span> electronic keyboard
      </p>

      <Divider orientation="left">verb</Divider>
      <div className="Content__description">
        <ul>
          <li>To type on a computer keyboard.</li>
          <span className="Content__">“Keyboarding is the part of this job I hate the most.”</span>
        </ul>
      </div>

      <div>
        <span className="Content__subtitle">Source</span>
        {" "}
        <span>https://en.wiktionary.org/wiki/keyboard</span>
      </div>
    </section>
  );
};

export default Content;
