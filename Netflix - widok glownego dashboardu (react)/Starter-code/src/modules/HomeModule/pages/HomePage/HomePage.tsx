import React from "react";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";
import "./HomePage.scss";
import { MainContent } from "../../components/MainContent/MainContent";

export const HomePage: React.FC = () => {
  return (
    <>
      <MainPhoto />
      <MainContent /> 
    </>
  );
};
