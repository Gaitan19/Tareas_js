import { CCarousel, CCarouselItem } from '@coreui/react';
import React from 'react';
import Card from './card';

const Carrusel = () => {
  return (
    <CCarousel controls className="Carrusel" dark interval={false}>
      <CCarouselItem>
        <div className="Carrusel-item">
          <Card text="Add dark property to the CCarousel for darker controls, indicators, and captions." />
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture2.png"
          />
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="Carrusel-item">
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture3.png"
          />
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture4.png"
          />
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="Carrusel-item">
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture2.png"
          />
          <Card text="Add dark property to the CCarousel for darker controls, indicators, and captions." />
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carrusel;
