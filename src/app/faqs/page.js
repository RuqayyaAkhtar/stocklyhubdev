'use client';
import React from 'react';
import styles from './faq.module.css';
import Image from 'next/image';
import faqImage from '../images/rectangle.png'; // Replace with the correct path
import framImage from '../images/image 11 (2).png'; // Replace with the correct path
import Header from '../header/page';
import { CiSearch } from "react-icons/ci";
import Footer from '../footer/page';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useState } from 'react';
import Help from './help';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with 8 free 30-minute onboarding calls to get you up and running. Book a call here.",
  },
];
const FAQBanner = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
    <Header/>
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Need Help with Something? Here are our most frequently asked questions.
        </p>
        <div className={styles.searchContainer}>
        <CiSearch className={styles.searchIcon}/>
          <input
            type="text"
            placeholder="Search Question in your Mind"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={faqImage} alt="FAQ Overview" className={styles.faqImage} />
      </div>
    </section>
    {/* section2 */}

    <section className={styles.faqmain}>
    <div className={`${styles.textContainer} ${styles.textContainer2}`}>
    <h1 className={styles.s2title}>General FAQs</h1>
    <p>Everything you need 10 know about he product and how it works, Can't find an answer? <a href="" className={styles.chat}>Chat to our Team</a> </p>
    <div className={styles.framImage}>
    <Image src={framImage} alt="FAQ Overview" className={styles.faqsImage} />
    </div>
      </div>
      <div className={`${styles.imageContainer} ${styles.imageContainer2}`}>
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
    </section>
    {/*  */}
    <Help/>
    <Footer/>
    </>
  );
};

export default FAQBanner;
