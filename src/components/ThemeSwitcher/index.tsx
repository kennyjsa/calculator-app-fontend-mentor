import React from "react";
import { Theme } from "../../contexts/ThemeContext";
import { useTheme } from "../../hooks/useTheme";

import "./style.css";

const position = {
  [Theme.theme1]: "5px",
  [Theme.theme2]: "27px",
  [Theme.theme3]: "49px",
};

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-switch-container">
      <div className="label">THEME</div>
      <div className="theme-switch">
        <div className="labels">
          <div onClick={() => setTheme(Theme.theme1)}>1</div>
          <div onClick={() => setTheme(Theme.theme2)}>2</div>
          <div onClick={() => setTheme(Theme.theme3)}>3</div>
        </div>
        <div className="switch">
          <div onClick={() => setTheme(Theme.theme1)} className="item"></div>
          <div onClick={() => setTheme(Theme.theme2)} className="item"></div>
          <div onClick={() => setTheme(Theme.theme3)} className="item"></div>

          <div
            className="bullet"
            style={{
              left: position[theme],
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
