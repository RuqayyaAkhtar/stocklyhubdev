'use client';
import React from 'react';
import styles from './industries.module.css';
import Image from 'next/image';
import faqImage from '../images/Group 1171278128.png'; // Replace with the correct path
import Header from '../header/page';
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import Footer from '../footer/page';
import { useState } from 'react';
import { industriesData } from './data';
import {faqs} from './data'
const IndustriesPage = () => {
  
    if (!industriesData || industriesData.length === 0) {
        return <p>No industries available</p>; 
      }
      // faqs

      const [openIndex, setOpenIndex] = useState(0);

      const toggleFAQ = (index) => {
          setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

  return (
    <>
    <Header/>
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Industries</h1>
        <p className={styles.subtitle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
        <div className={styles.searchContainer}>
          <a href="/bookDemo">
          <button>Book Demo</button>
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={faqImage} alt="FAQ Overview" className={styles.faqImage} />
      </div>
    </section>
    {/* section2 */}
    <div className={styles.sectionWrapper}>
      {industriesData.map((industry, index) => (
        <div
          key={index}
          className={`${styles.industryCard} ${
            index % 2 === 0 ? styles.rowReverse : ''
          }`} // Alternates 
        >
          <div className={styles.imageWrapper}>
          <Image
              src={industry.image}
              alt={industry.title}
              className={styles.industryImage}
              width={400} // Replace with your actual image width
              height={300} // Replace with your actual image height
            />
          </div>
          <div className={styles.textWrapper}>
          <div className={styles.icon}>
              <div className={styles.iconDiv}>{industry.icon}</div>
              <h3 className={styles.sectionHeading}>{industry.title}</h3>
            </div>
            <p className={styles.sectionSubheading}>{industry.description}</p>
            <div className={styles.buttonsWrapper}>
             <a href="/features"><button className={styles.buttonPrimary}>{industry.button1}</button></a> 
             <a href="/bookDemo"> <button className={styles.buttonSecondary}>{industry.button2}</button></a>
            </div>
          </div>
        </div>
      ))}
    </div>

        
            {/* faqs */}
            <div className={styles.faqMain}>
    <div className={styles.faqContainer}>
      <h2 className={styles.fatitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>{faq.question}</p>
            <span className={styles.faicon}>{openIndex === index ? <HiOutlineMinusSmall /> : <GoPlus />}</span>
          </div>
          {openIndex === index && <p className={styles.answer}>{faq.answer}</p>}
        </div>
      ))}
    </div>
    </div>
 {/*up to date  */}
 <div className={styles.contactMainn}>
    <div className={styles.contactBottom}>
   <div className={styles.contLeft}>
    <h2>Join our weekly newsletter</h2>
    <p>Stay up to date with latest news, announcements, and articles</p>
   </div>
   <div className={styles.contRight}>
    <input type="text" placeholder='your@company.com' />
    <button className={styles.btn2} type="button">Subscribe</button>
   </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default IndustriesPage;
