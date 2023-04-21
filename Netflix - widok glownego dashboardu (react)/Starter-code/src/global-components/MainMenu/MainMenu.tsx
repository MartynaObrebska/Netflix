import React, { useEffect, useState } from "react";
import "./MainMenu.scss";
import NetflixSvg from "@/assets/images/NETFLIX.svg";

export const MainMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const menuClassName = `mainMenu${activeMenu ? " active" : ""}`;

  useEffect(() => {
    const handleScroll = () => {
      const verticalScrollValue = window.scrollY;
      setActiveMenu(verticalScrollValue > 64);
      setScrollValue(verticalScrollValue);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  return (
    <div className={menuClassName}>
      <button className="home">
        <img src={NetflixSvg} className="logo" alt="Netflix logo" />
      </button>
    </div>
  );
};
