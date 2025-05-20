import { useState, useEffect, useCallback, useRef } from 'react';
import './Carousel.css';
import carouselImage from '../assets/Screenshot 2025-04-26 200116.png';

const slides = [
  {
    id: 1,
    image: carouselImage
  },
  {
    id: 2,
    image: carouselImage
  },
  {
    id: 3,
    image: carouselImage
  },
  {
    id: 4,
    image: carouselImage
  },
  {
    id: 5,
    image: carouselImage
  },
  {
    id: 6,
    image: carouselImage
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef(null);
  const transitionTimeout = useRef(null);

  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 100;
        }
        return prev + 0.5;
      });
    }, 25);
  }, []);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    resetProgress();

    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }, [currentSlide, isTransitioning, resetProgress]);

  const goToNextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    resetProgress();
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, [resetProgress]);

  useEffect(() => {
    if (progress >= 100 && !isPaused) {
      goToNextSlide();
    }
  }, [progress, isPaused, goToNextSlide]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="carousel-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : ''}`}
          >
            <div 
              className="carousel-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className="carousel-button prev"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        className="carousel-button next"
        onClick={goToNextSlide}
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="carousel-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel; 