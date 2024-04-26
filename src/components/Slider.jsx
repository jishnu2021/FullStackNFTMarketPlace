
import React, { useState } from 'react';
import '../styles/slide.css'
import nft1 from '../images/nft1.jpeg'
import nft2 from '../images/nft2.jpeg'
import nft3 from '../images/nft3.jpeg'
import nft4 from '../images/nft4.jpeg'


function Slider() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [nft1, nft2, nft3, nft1];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
 

  return (
    <div className="button-container">
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        All
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Arts
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Gaming
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Photography
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Memborships
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        PFPS
      </button>
      <button
        className={`three-d-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Music
      </button>

    {/* ----------------Slider----------------------- */}
      <div className="slider-container">
      <div className="slideshow">
        <div className="slideshow__image-container">
        <div style={{ position: 'relative', width: '93vw', overflow: 'hidden', marginBottom:'2rem' }}>
  {/* Image */}
  <img className="slideshow__image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ height: 500, borderRadius: 15}} />
  {/* Previous nft1 */}
  <div className="slideshow__nav slideshow__nav--prev" onClick={prevImage} style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z" />
    </svg>
  </div>
  {/* Next nft1 */}
  <div className="slideshow__nav slideshow__nav--next" onClick={nextImage} style={{ position: 'absolute', top: '50%', right: '4%', transform: 'translateY(-50%)' }}>
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z" />
    </svg>
  </div>
</div>

        </div>
      </div>
    </div>
    
    <div className="sliderbutton">
    <div className="panel1">
    <button>Trending</button>
        <button>Top</button>
    </div>
    <div className="panel2">
    <div className="innerpanel">
    <button>1hr</button>
    <button>6hr</button>
    <button>24hr</button>
    <button>7day</button>
    </div>
    <div className="innerpanel1">
    <button >ALL Chains</button>
    <button>View All</button>
    </div>
    </div>
    </div>


      </div>
  );
}

export default Slider;
