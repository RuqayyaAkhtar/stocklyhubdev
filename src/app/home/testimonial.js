'use client';
import React, { useState, useEffect } from 'react';
import '../globals.css';
import styles from './home.module.css';
import { FaQuoteRight } from "react-icons/fa";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make.",
    name: "Lorem Ipsum",
    position: "MS Computer",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make.",
    name: "Lorem Ipsum",
    position: "Zain Computer",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make.",
    name: "XT Computer",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make.",
    name: "Jane Doe",
    position: "Tech Solutions",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make.",
    name: "John Smith",
    position: "Web Corp",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(null);

  //  mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isMobileView !== null) {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (isMobileView ? testimonials.length : 3)
      );
    }
  };

  const prevSlide = () => {
    if (isMobileView !== null) { 
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + (isMobileView ? testimonials.length : 3)) % (isMobileView ? testimonials.length : 3)
      );
    }
  };

  if (isMobileView === null) {
    return null; 
  }

  return (
    <div className={styles.containerMain1}>
    <section className={styles.testimonialSection}>
      <h4 className={styles.subtitle}>Testimonials</h4>
      <h2 className={styles.title}>What the People Thinks About Us</h2>
      <div className={styles.slider}>
        <div
          className={styles.testimonialContainer}
          style={{
            transform: isMobileView ? 'none' : `translateX(-${currentIndex * 100 / 3}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonial} ${
                !isMobileView && index === (currentIndex + 1) % testimonials.length
                  ? styles.centerCard
                  : ""
              }`}
              style={{
                display: isMobileView && index !== currentIndex ? 'none' : 'block',
              }}
            >
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.userInfo}>
                <div className={styles.avatar}></div>
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.position}>{testimonial.position}</p>
                </div>
                <span className={styles.quoteIcon}><FaQuoteRight /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigation}>
        <button onClick={prevSlide} className={styles.navButton}><RiArrowLeftWideFill /></button>
        <span className={styles.pageIndicator}>
          {`0${(currentIndex % (isMobileView ? testimonials.length : 3)) + 1} / 0${isMobileView ? testimonials.length : 3}`}
        </span>
        <button onClick={nextSlide} className={styles.navButton}><RiArrowRightWideFill /></button>
      </div>
    </section>
    </div>
  );
};

export default TestimonialSlider;
