import React from "react";
import { HomePage } from "@modules";
import {
  MainMenu,
  Footer,
  VideoPopUp,
  PreviewPopUp,
} from "@/global-components";
const App: React.FC = () => (
  <>
    <MainMenu />
    <HomePage />
    <Footer />
    <VideoPopUp />
    <PreviewPopUp />
  </>
);

export default App;
