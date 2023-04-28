import React from "react";
import { HomePage } from "@modules";
import { MainMenu } from "@/global-components";
import { Footer } from "./global-components/Layout/Footer/Footer";
const App: React.FC = () => (
  <>
    <MainMenu />
    <HomePage />
    <Footer />
  </>
);

export default App;
