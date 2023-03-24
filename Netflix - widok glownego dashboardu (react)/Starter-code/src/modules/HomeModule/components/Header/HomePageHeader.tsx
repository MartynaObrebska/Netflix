import React from "react";
import { Content } from "./Content/Content";
import "./HomePageHeader.scss";
// import ViteSvg from "@/assets/images/vite.svg";

export const HomePageHeader: React.FC = () => (
  <div className="home-page-header">
    <div className="home-page-header-shadow top" />
    <Content />
    <div className="home-page-header-shadow bottom" />
  </div>
);
