'use client';
import React from 'react';
import styles from './feature.module.css';
import Image from 'next/image';
import faqImage from '../images/Group 1171278177.png';
import Header from '../header/page';
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import Footer from '../footer/page';
import { useState } from 'react';
import { industriesData } from './data';
import {faqs} from './data'
import { sectionData} from './data'
import { AiFillTool } from "react-icons/ai";

const IndustriesPage = () => {
  
    // if (!industriesData || industriesData.length === 0) {
    //     return <p>No industries available</p>; 
    //   }
      // faqs

      const [openIndex, setOpenIndex] = useState(0);

      const toggleFAQ = (index) => {
          setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      const [activeSection, setActiveSection] = useState('All');

  return (
    <>
    <Header/>
    <section className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Features</h1>
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
    <div className={styles.integrationSection}>
  {/* Buttons */}
  <div className={styles.buttons}>
    <button
      className={`${styles.tabButton} ${activeSection === 'All' ? styles.active : ''}`}
      onClick={() => setActiveSection('All')}
    >
      All
    </button>
    {sectionData.map((section) => (
      <button
        key={section.id}
        className={`${styles.tabButton} ${activeSection === section.id ? styles.active : ''}`}
        onClick={() => setActiveSection(section.id)}
      >
        {section.title}
      </button>
    ))}
  </div>

  {/* Section Content */}
  <div className={styles.sectionContent}>
    {activeSection === 'All'
      ? sectionData.map((section, index) => (
          <div
            key={section.id}
            className={`${styles.section} ${index % 2 === 0 ? styles.normal : styles.zigzag}`}
          >
            {/* Content Row */}
            <div className={`${styles.contentRow} ${index % 2 === 0 ? styles.normal : styles.zigzag}`}>
              <div className={styles.content}>
                <h2 className={styles.Stitle}>{section.title}</h2>
                <p className={styles.Sdescription}>{section.description}</p>
                <div className={styles.buttons}>
                  <button className={styles.bookDemo}>Book Demo</button>
                  <button className={styles.seePricing}>See Pricing</button>
                </div>
              </div>
              <div className={styles.image}>
                <Image src={section.image} alt={section.title} height={300} />
              </div>
            </div>
            {/* Cards */}
            <div className={styles.cards}>
              {section.cards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.iconContainer}>
                    <AiFillTool className={styles.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      : sectionData
          .filter((section) => section.id === activeSection)
          .map((section, index) => (
            <div
              key={section.id}
              className={`${styles.section} ${index % 2 === 0 ? styles.normal : styles.zigzag}`}
            >
              {/* Content Row */}
              <div className={`${styles.contentRow} ${index % 2 === 0 ? styles.normal : styles.zigzag}`}>
                <div className={styles.content}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.buttons}>
                    <button className={styles.bookDemo}>Book Demo</button>
                    <button className={styles.seePricing}>See Pricing</button>
                  </div>
                </div>
                <div className={styles.image}>
                  <Image src={section.image} alt={section.title} height={300}/>
                </div>
              </div>
              {/* Cards */}
              <div className={styles.cards}>
                {section.cards.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <div className={styles.iconContainer}>
                      <AiFillTool className={styles.icon} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
  </div>
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
