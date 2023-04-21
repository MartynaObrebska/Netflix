import React from "react";
import "./Carousels.scss";
import { CarouselSection } from "@/global-components/CarouselSection/CarouselSection";
import image1 from "@/assets/images/385509_Peaky_Blinders_jpg_80_resize_1155x664 1.png";
import image2 from "@/assets/images/amzon-prime-video-oficjalny-zwiastun-finalowego-sezonu-vikings-wikingowie 1.png";
import image3 from "@/assets/images/breaking_bad 1.png";
import image4 from "@/assets/images/lucyfer-czolo 1.png";
import image5 from "@/assets/images/The-Office-serial 1.png";
import image6 from "@/assets/images/TWD-1024x575 1.png";
import { SlideTile } from "@/global-components/SlideTile/SlideTile";

export const Carousels = () => {
  const generateSlides = (
    items: { image: string; rank?: number }[],
    top10?: boolean
  ) =>
    items.map((item, index) => (
      <SlideTile
        key={index}
        image={item.image}
        top10={top10}
        rank={item.rank}
      />
    ));

  const sections = [
    {
      title: "Docenione przez krytyków",
      items: [
        { image: image2 },
        { image: image3 },
        { image: image5 },
        { image: image6 },
        { image: image4 },
        { image: image1 },
      ],
    },
    {
      title: "Popularne teraz",
      items: [
        { image: image3 },
        { image: image2 },
        { image: image5 },
        { image: image1 },
        { image: image4 },
      ],
    },
    {
      title: "Obejrzyj ponownie",
      items: [
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image2 },
        { image: image1 },
        { image: image3 },
      ],
    },
    {
      title: "Top 10 seriali w Polsce dzisiaj",
      items: [
        { image: image6, rank: 1 },
        { image: image3, rank: 2 },
        { image: image4, rank: 3 },
        { image: image2, rank: 4 },
        { image: image3, rank: 5 },
        { image: image1, rank: 6 },
        { image: image2, rank: 7 },
        { image: image4, rank: 8 },
        { image: image6, rank: 9 },
        { image: image5, rank: 10 },
      ],
      top10: true,
    },
    {
      title: "Top 10 seriali na świecie dzisiaj",
      items: [
        { image: image2, rank: 1 },
        { image: image3, rank: 2 },
        { image: image5, rank: 3 },
        { image: image1, rank: 4 },
        { image: image6, rank: 5 },
        { image: image1, rank: 6 },
        { image: image3, rank: 7 },
        { image: image5, rank: 8 },
        { image: image2, rank: 9 },
        { image: image4, rank: 10 },
      ],
      top10: true,
    },
  ];

  const carousels = sections.map((section, index) => (
    <CarouselSection
      key={index}
      title={section.title}
      slides={generateSlides(section.items, section.top10)}
      top10={section.top10}
    />
  ));
  return <div className="carousels">{carousels}</div>;
};
