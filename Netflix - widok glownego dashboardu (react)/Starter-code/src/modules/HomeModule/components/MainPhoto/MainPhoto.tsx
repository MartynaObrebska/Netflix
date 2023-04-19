import React from "react";
import { MainContent } from "../MainContent/MainContent";
import "./MainPhoto.scss";

export const MainPhoto: React.FC = () => (
  <div className="home-page-main-photo">
    <div className="home-page-main-photo-shadow top" />
    <MainContent />
    <div className="home-page-main-photo-shadow bottom" />
  </div>
);
