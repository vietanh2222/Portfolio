import React from 'react';
import './carousel.css';
import HTMLpoint from '../../assets/images/HTML point.png'
import SQLpoint from '../../assets/images/SQL point.png'
import eProject from '../../assets/images/eProject point.png'

const images = [HTMLpoint, SQLpoint, eProject]


const Carousel = () => {

  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {

    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      
      behavior: 'smooth',
      
      block: 'nearest',
      
      inline: 'start',
    });
  };

  
  const totalImages = images.length;


  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };


  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={(e) => {e.stopPropagation()
        isLeft ? previousImage() : nextImage()}
        }   
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (

    <div className="flex justify-center w-full items-center">
      <div className="relative w-full">
        <div className="carousel rounded-xl">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" alt="" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel
