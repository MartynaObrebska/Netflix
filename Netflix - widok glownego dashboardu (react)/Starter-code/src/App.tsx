import React from "react";
import { HomePage } from "@modules";
import { MainMenu } from "@/global-components";
import { Footer } from "./global-components/Layout/Footer/Footer";
import { VideoPopUp } from "./global-components/PopUps/VideoPopUp/VideoPopUp";
const App: React.FC = () => (
  <>
    <MainMenu />
    <HomePage />
    <Footer />
    <VideoPopUp />
  </>
);

export default App;
