/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { useResponsive } from 'src/hooks/use-responsive';

const CarouselItem = ({ imgSrc }) => {
  const mdUp = useResponsive('up', 'lg');
  return <img width="100%" alt="image_ccmantra" height={mdUp ? 500 : 250} src={imgSrc} />;
};

const HomeCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      label: '',
      img: '/assets/carousel/9.png',
      link: 'https://yuafj.courses.store/131449'
    },
    {
      id: 2,
      label: '',
      img: '/assets/carousel/8.png',
    },
    {
      id: 3,
      label: '',
      img: '/assets/carousel/11.png',
    },
    {
      id: 4,
      label: '',
      img: '/assets/carousel/10.png',
    }
  ];

  const renderItems = carouselItems.map((i) => <CarouselItem imgSrc={i.img} />);

  return (
    <AliceCarousel
      items={renderItems}
      responsive={{
        0: { items: 1 },
      }}
      autoPlay
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default HomeCarousel;
