import React, { useEffect, useState } from "react";
import { Select, Switch } from "antd";

import Logo from "../assets/images/logo.svg";
import Moon from "../assets/icons/icon-moon.svg";

import "./Navbar.scss";

function Navbar() {
  const [option, setOption] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (value) => {
    setOption(value);
  };

  useEffect(() => {
    document.querySelector(".Home").style.fontFamily = option;
  }, [option]);

  useEffect(() => {
    const background = checked ? "#000" : "initial";    
    const color = background === "initial" ? "#2D2D2D" : "#FFF"

    document.querySelector(".Home").style.setProperty("background-color", background);
    document.querySelector(".Home").style.setProperty("color", color);
  }, [checked]);

  const onChange = (checked) => {
    setChecked(checked);
  };

  return (
    <header className="Navbar">
      <img src={Logo} alt="Logo" />
      <div className="Navbar__options">
        <Select
          defaultValue="Fontes"
          style={{ width: 95 }}
          onChange={handleChange}
          options={[
            { value: "Inconsolata", label: "Mono" },
            { value: "Inter", label: "Serif" },
            { value: "Lora", label: "Sans Serif" },
          ]}
        />
        <span className="Navbar__options-toggle">
          <Switch onChange={onChange} />
        </span>
        <img src={Moon} alt="Ícone da Lua" style={{ marginLeft: 12 }} />
      </div>
    </header>
  );
}

export default Navbar;
