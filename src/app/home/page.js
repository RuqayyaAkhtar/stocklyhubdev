'use client'
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebookF } from 'react-icons/fa';
'../globals.css';
import { useState } from 'react';
import styles from './home.module.css';
import Image from "next/image";
import banner from '../images/banner.png'
import rectagle from '../images/rectangle.png'
import { FaWrench, FaRecycle, FaShoppingCart, FaWarehouse, FaExchangeAlt } from 'react-icons/fa';
import { GiTrade } from 'react-icons/gi';
import { GoArrowUpRight } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import TestimonialSlider from './testimonial';


const industriesData = [
  { title: 'Retail', icon: <FaShoppingCart /> },
  { title: 'Repair', icon: <FaWrench /> },
  { title: 'Recycle', icon: <FaRecycle /> },
  { title: 'Wholesale', icon: <FaWarehouse /> },
  { title: 'BuyBack', icon: <FaExchangeAlt /> },
  { title: 'Trade-in', icon: <GiTrade /> }
];



import { industriesDataSets } from './cardsData';


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
];
const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
  };

  const displayedCards = industriesDataSets[activeIndex] || industriesDataSets[0];




  return (
        <div className={styles.homecontainer} >
        <div className={styles.mainhome} >
            <div className={styles.contntlft}>
            <h1 className={styles.bannerH1}>All-in-One Inventory Management Software for Multi-Channel & Multi-Location Businesses!</h1>
            <p className={styles.para}>Real-Time Inventory Tracking Offered to Enhance Your Daily Operations!</p>
            <div className={styles.btnDiv}>
            <button className={styles.bannerBtn} ><a href="/stocklyhubdev/features" className={styles.bannerA}>Features</a></button>
            <button className={styles.bannerBtn2} id="demo-btn3" ><a href="/stocklyhubdev/bookDemo" className={styles.bannerA}>Book Demo</a></button>
            </div>

            </div>
            <div className={styles.cont_r}>
            <Image
                  src={banner}
                  className={styles.logo_im_n}
                  alt="Footer Logo"
                  width={600}
                  height={600}
                />
            </div>
        </div>
        {/*  */}
      <section className={styles.container}>
      <div className={styles.header}>
        <h2>Industries</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make a book.</p>
        <a href="/stocklyhubdev/pricing"><button className={styles.pricingButton}>See Pricing</button></a>
      </div>
      
      <div className={styles.cardsContainer}>
        {industriesData.map((industry, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}><div className={styles.iconDiv}>{industry.icon}</div><h3>{industry.title}</h3></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
            <a href="/stocklyhubdev/industries" className={styles.learnMore}>Learn More <GoArrowUpRight className={styles.demoA}/></a>
          </div>
        ))}
      </div>
    </section>
    {/* sec3 */}
    <section className={styles.benefitsSection}>
      <div className={styles.containerS}>
        {/* Row with Image and Text */}
        <div className={styles.row}>
          <div className={styles.imageWrapper}>
            <Image src={ rectagle} alt="App Screenshot" className={styles.appImage} />
          </div>
          <div className={styles.textWrapper}>
            <h4 className={styles.subtitle}>Why Choose Stockyhub</h4>
            <h2 className={styles.title}>What kind of benefit from this app</h2>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className={styles.buttons}>
              <a href="/stocklyhubdev/pricing" style={{margin:'0'}}><button className={styles.primaryButton}>See Pricing</button></a>
              <a href="/stocklyhubdev/bookDemo" style={{margin:'0'}}><button className={styles.secondaryButton}>Try It Free</button></a>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className={styles.benefitsGrid}>
          {['Easy To Use & User Friendly UI', 'Real-time inventory tracking', 'Detailed Inventory Management', 'Maximized profit margins', 'Purchase order', 'Received purchases'].map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <span className={styles.checkIcon}><IoIosCheckmark /></span> {benefit}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
        <div className={styles.featuresMain}>

          <div className={styles.featuresHeader}>
            <h4 className={styles.featuresSubtitle}>Our Key Feature</h4>
            <h2 className={styles.featuresTitle}>Our features</h2>
          </div>
          <p className={styles.featuresDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          </div>
   
        <div className={styles.featuresGrid}>
        {industriesDataSets.map((_, index) => (
          <button
            key={index}
            className={`${styles.featureItem} ${activeIndex === index ? styles.activeFeature : ''}`}
            onClick={() => handleFeatureClick(index)}
          >
           <FaWarehouse className={`${styles.featureItems} ${activeIndex === index ? styles.activeFeatures : ''}`} />  Lorem Ipsum {index + 1}
          </button>
        ))}
  
      </div>
        </div>
      </div>
    </section>
    {/* sec4 */}
    <section className={`${styles.container} ${styles.container4}`}>
      <div className={styles.header}>
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make a book.</p>
        <a href="/stocklyhubdev/pricing"><button className={styles.pricingButton}>See Pricing</button></a>
      </div>
      

  
       <div className={styles.cardsContainer}>
      {industriesDataSets[activeIndex].map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}>
              <div className={styles.iconDiv}>{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          <p>{item.description}</p>
          <a href="#" className={styles.learnMore}>Learn More <GoArrowUpRight className={styles.demoA} /></a>
        </div>
      ))}
    </div>
 
    </section>
    {/* testimonial */}
    <TestimonialSlider/>
    {/* faqs */}
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
  );
};

export default Home;
