import React from "react";
import "./MainMenuGlobalComponent.scss";
import NetflixSvg from "@/assets/images/NETFLIX.svg";

export const MainMenuGlobalComponent: React.FC = () => (
  <div className="mainMenu">
    <button className="home">
      <img src={NetflixSvg} className="logo" alt="Netflix logo" />
    </button>
  </div>
);
