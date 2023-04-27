import React from "react";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";
import "./HomePage.scss";
import { MainContent } from "../../components/MainContent/MainContent";
import { Carousels } from "../../components/Carousels/Carousels";
export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <MainPhoto />
      <MainContent />
      <Carousels />
    </div>
  );
};
