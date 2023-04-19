import React from "react";
import "./MainContent.scss";

export const MainContent: React.FC = () => (
  <div className="home-page-main-content-container">
    <div className="home-page-main-content">
      <div></div>
      <div className="title" />
      <p className="description">
        Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo w
        sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i wrogów w
        Akademii Nevermore.
      </p>
    </div>
    <div className="home-page-main-content-buttons"></div>
  </div>
);
