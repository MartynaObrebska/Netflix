import React from "react";
import "./Carousels.scss";
import { CarouselSection } from "@/global-components/CarouselSection/CarouselSection";
import image1 from "@/assets/images/385509_Peaky_Blinders_jpg_80_resize_1155x664 1.png";
import image2 from "@/assets/images/amzon-prime-video-oficjalny-zwiastun-finalowego-sezonu-vikings-wikingowie 1.png";
import image3 from "@/assets/images/breaking_bad 1.png";
import image4 from "@/assets/images/lucyfer-czolo 1.png";
import image5 from "@/assets/images/The-Office-serial 1.png";
import image6 from "@/assets/images/TWD-1024x575 1.png";

export const Carousels: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const slides = images.map((image, index) => (
    <div key={index} className="picture-container">
      <img style={{ userSelect: "none" }} src={image} />
    </div>
  ));
  return (
    <div className="carousels">
      <CarouselSection title="Docenione przez krytyków" slides={slides} />
    </div>
  );
};
