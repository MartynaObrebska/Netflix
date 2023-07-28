import React from "react";
import "./MainContent.scss";
import Top10Img from "@/assets/images/top10.png";
import WednesdayLogo from "@/assets/images/logo_wednesday.png";
import { Button } from "@/global-components/Buttons/Button/Button";
import { InfoCircle } from "iconsax-react";
import { useAppDispatch } from "@/app/hooks";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";
import { PlayBtn } from "@/global-components/Buttons/PlayBtn/PlayBtn";

export const MainContent: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleMoreInfoClick = () => {
    dispatch(setPreviewActive(true));
  };

  return (
    <div className="home-page-main-content">
      <div className="content">
        <div className="note">
          <img src={Top10Img} className="top10" alt="top10" />
          <p>Nr 5 wśród seriali dzisiaj</p>
        </div>
        <img src={WednesdayLogo} className="title" alt="Wednesday logo" />
        <p className="description">
          Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo
          w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i
          wrogów w Akademii Nevermore.
        </p>
      </div>
      <div className="buttons">
        <PlayBtn className="white" content="Odtwórz" />
        <Button
          className="grey"
          content="Więcej informacji"
          onClick={handleMoreInfoClick}
          icon={<InfoCircle size="20" />}
        />
      </div>
    </div>
  );
};
