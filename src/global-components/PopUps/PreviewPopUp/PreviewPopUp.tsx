import React, { useRef } from "react";
import "./PreviewPopUp.scss";
import { CloseCircle } from "iconsax-react";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";
import { AddBtn } from "@/global-components/Buttons/AddBtn/AddBtn";
import { LikeBtn } from "@/global-components/Buttons/LikeBtn/LikeBtn";
import { PlayBtn } from "@/global-components/Buttons/PlayBtn/PlayBtn";
import { MaturityRatingIcon } from "@/global-components/Icons/MaturityRatingIcon/MaturityRatingIcon";
import { SeasonDropdown } from "./Season Dropdown/SeasonDropdown";
import { EpisodeTile } from "@/global-components/PopUps/PreviewPopUp/EpisodeTile/EpisodeTile";

export const PreviewPopUp = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.preview.active);
  const {
    title,
    image,
    logo,
    description,
    year,
    cast,
    genres,
    creators,
    categories,
    maturityRating,
    seasons,
  } = useAppSelector((state) => state.preview.content);
  const selectedSeason = useAppSelector(
    (state) => state.preview.selectedSeason
  );
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const previewClassName = `preview-container ${active ? "active" : ""}`;

  const maturityRatingDescription = maturityRating.description.map(
    (item, index) => (
      <span key={index}>
        <span className={`el${index}`}>,</span>
        <span className="item">{item}</span>
      </span>
    )
  );

  const maturityRatingContent = (
    <div className="maturity-rating">
      <MaturityRatingIcon number={maturityRating.number} />
      <div className="maturity-rating-description">
        {maturityRatingDescription}
      </div>
    </div>
  );

  const rightSectionArray = [
    { title: "Obsada", array: cast },
    { title: "Twórcy", array: creators },
    { title: "Gatunki", array: genres },
  ];

  const handleClickScrollToAboutSection = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const rightSection = rightSectionArray.map((item, index) => {
    const { title, array } = item;
    return (
      <div key={index} className={`tags ${title}`}>
        <span className="title">{title}:</span>
        {(array.length > 3 ? [...array.slice(0, 3), "więcej"] : array).map(
          (el, id) => {
            return (
              <span
                key={id}
                onClick={
                  el === "więcej" ? handleClickScrollToAboutSection : undefined
                }
              >
                <span className={`el${id}`}>,</span>
                <span className="element">{el}</span>
              </span>
            );
          }
        )}
      </div>
    );
  });

  const episodes = useAppSelector(
    (state) => state.preview.content.seasons[selectedSeason - 1].episodes
  );

  const episodeTiles = episodes.map((episode, index) => (
    <EpisodeTile key={index} episode={episode} />
  ));

  const aboutArray = [
    { title: "Obsada", array: cast },
    { title: "Twórcy", array: creators },
    { title: "Gatunki", array: genres },
    { title: "Kategorie", array: categories },
  ];

  const aboutSection = aboutArray.map((item, index) => {
    const { title, array } = item;
    return (
      <div key={index} className={`tags ${title}`}>
        <span className="title">{title}:</span>
        {array.map((el, id) => {
          return (
            <span key={id}>
              <span className={`el${id}`}>,</span>
              <span className="element">{el}</span>
            </span>
          );
        })}
      </div>
    );
  });

  const handleCloseOnClick = () => {
    dispatch(setPreviewActive(false));
  };

  return (
    <div className={previewClassName}>
      <div className="preview-backdrop" onClick={handleCloseOnClick} />
      <div className="preview">
        <div className="preview-close-btn" onClick={handleCloseOnClick}>
          <div className="bg" />
          <CloseCircle size="40" variant="Bold" />
        </div>
        <div className="preview-image">
          <div className="preview-image-bg">
            <img height="100%" src={image} alt={title} />
            <div className="shadow" />
          </div>
          <div className="preview-image-modal">
            <img
              className="preview-image-modal-logo"
              height="200px"
              src={logo}
              alt={`${title} logo`}
            />
            <div className="preview-image-modal-buttons">
              <PlayBtn className="white" content="Odtwórz" />
              <AddBtn className="transparent" />
              <LikeBtn className="transparent" />
            </div>
          </div>
        </div>
        <div className="preview-content">
          <div className="preview-content-description">
            <div className="preview-content-description-left">
              <div className="top-section">
                <span>97% Match</span>
                <span>{year}</span>
                <span>{seasons.length} Sezonów</span>
              </div>
              {maturityRatingContent}
              <div className="series-description">{description}</div>
            </div>
            <div className="preview-content-description-right">
              {rightSection}
            </div>
          </div>
          <div className="preview-content-episodes">
            <div className="episodes-header">
              <div className="episodes-header-left">
                <div className="title">Episodes</div>
                <div className="description">
                  <span className="season">Sezon {selectedSeason}:</span>
                  {maturityRatingContent}
                </div>
              </div>
              <div className="episodes-header-right">
                <SeasonDropdown />
              </div>
            </div>
            <div className="episodes-list">{episodeTiles}</div>
          </div>
          <div className="preview-content-about" ref={aboutRef}>
            <h2 className="about-title">
              O tytule <span>{title}</span>
            </h2>
            <div className="about-list">{aboutSection}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
