import React from "react";
import { Select, Switch } from "antd";

import Logo from "../assets/images/logo.svg";
import Moon from "../assets/icons/icon-moon.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <header className="Navbar">
      <img src={Logo} alt="Logo" />
      <div className="Navbar__options">
        <Select
          defaultValue="fontes"
          style={{ width: 95 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
        <span className="Navbar__options-toggle">
          <Switch defaultChecked/>
        </span>
        <img src={Moon} alt="Ícone da Lua" style={{ marginLeft: 12 }} />
      </div>
    </header>
  );
}

export default Navbar;
