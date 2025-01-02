'use client';
import React from 'react';
import styles from './equipment.module.css';
import Image from 'next/image';
import faqImage from '../images/Group 1171278389.png'; 
import Header from '../header/page';
import Footer from '../footer/page';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import equipmentData from './data'
import { useState } from 'react';
import {faqs} from './data'
const Integrations = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Header />
            <div className={styles.containerMain}>
            <section className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Equipment</h1>
                    <p className={styles.subtitle}>
                    Stocklyhub easily connects with a wide range of online resources and applications. Configure repair shop software to interact with numerous external services with ease.                    </p>
        
                </div>
                <div className={styles.imageContainer}>
                    <Image src={faqImage} alt="FAQ Overview" className={styles.faqImage} />
                </div>
            </section>
            </div>
            {/* section2 */}
            <div className={styles.containerMain1}>
            <div className={styles.integrationSection}>
                
            <section className={styles.equipmentSection}>
      {equipmentData.map((category, index) => (
        <div key={index} className={styles.category}>
          <h2 className={styles.etitle}>{category.category}</h2>
          <p className={styles.edescription}>{category.description}</p>
          <div className={styles.itemsContainer}>
            {category.items.map((item, idx) => (
              <div key={idx} className={styles.itemCard}>
                <Image src={item.image} alt={item.title} className={styles.itemImage} />
                <p className={styles.itemTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
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
   <Footer />
        </>
    );
};

export default Integrations;
