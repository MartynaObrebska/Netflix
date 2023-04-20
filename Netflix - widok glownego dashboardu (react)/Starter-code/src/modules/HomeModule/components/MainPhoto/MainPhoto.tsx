import React from "react";
import "./MainPhoto.scss";
import { MainContent } from "../MainContent/MainContent";

export const MainPhoto: React.FC = () => (
  <div className="home-page-main-photo">
    <div className="home-page-main-photo-shadow top" />
    <MainContent />
    <div className="home-page-main-photo-shadow bottom" />
  </div>
);
