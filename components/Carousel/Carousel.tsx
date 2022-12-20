import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

import { IoIosArrowBack } from 'react-icons/io';

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  return (
    <div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {items?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}
      {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}
