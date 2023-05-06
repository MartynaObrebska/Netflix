import React from "react";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";
import "./HomePage.scss";
import { MainContent } from "../../components/MainContent/MainContent";
import { Carousels } from "../../components/Carousels/Carousels";
import { useAppSelector } from "@/app/hooks";
export const HomePage: React.FC = () => {
  const activePreview = useAppSelector((state) => state.preview.active);
  const activeVideo = useAppSelector((state) => state.video.activeVideo);
  const homePageClassName = `home-page ${
    activePreview || activeVideo ? "disabled" : ""
  }`;
  return (
    <div className={homePageClassName}>
      <MainPhoto />
      <MainContent />
      <Carousels />
    </div>
  );
};
