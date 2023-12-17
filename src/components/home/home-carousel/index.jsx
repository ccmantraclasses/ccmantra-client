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
      img: '/assets/carousel/image1.jpg',
    },
    {
      id: 2,
      label: '',
      img: '/assets/carousel/image2.jpg',
    },
    {
      id: 3,
      label: '',
      img: "https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2Fimage3.jpg?alt=media&token=2d2be739-5760-47b0-af0d-1759bff6fafc"},
    {
      id: 4,
      label: '',
      img: '/assets/carousel/image4.jpg',
    },
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
