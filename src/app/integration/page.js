'use client';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import faqImage from '../images/Group 1171278183.png'; // Replace with the correct path
import Header from '../header/page';
import { CiSearch } from "react-icons/ci";
import Footer from '../footer/page';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
//
import ebay from '../images/image (1).png'
import logo from '../images/Group 1171278159.png'
import { useState } from 'react';

const categories = [
    { name: 'All', id: 'all' },
    { name: 'CRM', id: 'crm' },
    { name: 'Beta', id: 'beta' },
    { name: 'Demo', id: 'demo' },
    { name: 'Featured', id: 'featured' },
    { name: 'Calendar', id: 'calendar' },
    { name: 'Payment', id: 'payment' },
    { name: 'Invoice', id: 'invoice' },
    { name: 'DUE', id: 'due' },
];
const cardsData = [
    { id: 1, category: 'payment', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: ebay },
    { id: 2, category: 'payment', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: ebay },
    { id: 3, category: 'beta', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 4, category: 'beta', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 5, category: 'calendar', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 6, category: 'invoice', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 7, category: 'invoice', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 8, category: 'demo', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 9, category: 'featured', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 10, category: 'due', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 11, category: 'crm', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },
    { id: 12, category: 'crm', title: 'Real Time Inventory Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting", logo: logo },

];
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
const Integrations = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // cards
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const filteredCards = activeCategory === 'all' ? cardsData : cardsData.filter(card => card.category === activeCategory);

    return (
        <>
            <Header />
            <section className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Integrations</h1>
                    <p className={styles.subtitle}>
                        Stocklyhub easily connects with a wide range of online resources and applications. Configure repair shop software to interact with numerous external services with ease.
                    </p>
                    <div className={styles.searchContainer}>
                        <CiSearch className={styles.searchIcon} />
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
            <div className={styles.integrationSection}>
                <div className={styles.buttonsContainer}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className={styles.cardsContainer}>
                    {filteredCards.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <div className={styles.imagemain}>
                                <Image src={card.logo} alt={card.title} className={styles.logo} />
                            </div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <button className={styles.cardButton}>Display Add-on</button>
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
    
            <Footer />
        </>
    );
};

export default Integrations;
