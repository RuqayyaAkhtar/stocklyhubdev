'use client';
import React from 'react';
import styles2 from './faq.module.css';
import Image from 'next/image';
import faqImage from '../images/Rectangle 34625834.png'; // Replace with the correct path

const Help = () => {
  return (
    <div>
      <div className={styles2.main}>
        <div className={styles2.text}>
            <h1>Still have Questions?</h1>
            <p>Join 40000+ startups already growing with StocklyHub</p>
            <div className={styles2.learn}>
                <p>Learn More</p>
                <button>Get Started</button>
            </div>
        </div>
        <div className={styles2.image}>
        <Image src={faqImage} alt="FAQ Overview" className={styles2.faqbImage} />
        </div>
      </div>
    </div>
  );
}

export default Help;
