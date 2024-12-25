'use client'
import React, { useState } from 'react';
import styles from './pricing.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // Import the icon
import Header from '../header/page';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import Help from '../faqs/help';
import Footer from '../footer/page';


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

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('quarterly');

  const pricingData = {
    monthly: { free:0 ,basic: 12, standard: 35, premium: 58 },
    quarterly: { free:0 ,basic: 12, standard: 26, premium: 46 },
    yearly: { free:0 ,basic: 12, standard: 21, premium: 38 },
  };

  const originalPrices = {
    monthly: { free:0 ,basic: 15, standard: 39, premium: 65 },
    quarterly: { free:0 ,basic: 15, standard: 35, premium: 58 },
    yearly: { free:0 ,basic: 15, standard: 30, premium: 48 },
  };
  // faqs
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <Header/>
    <div className={styles.pricingSection}>
      <h2>Choose your right plan!</h2>
      <p>Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for seamless fit.</p>
      
      {/* Billing Toggle */}
      <div className={styles.billingToggle}>
        <button 
          className={billingCycle === 'monthly' ? styles.active : ''} 
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button 
          className={billingCycle === 'quarterly' ? styles.active : ''} 
          onClick={() => setBillingCycle('quarterly')}
        >
          Quarterly (10% Off)
        </button>
        <button 
          className={billingCycle === 'yearly' ? styles.active : ''} 
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly (20% Off)
        </button>
      </div>

      {/* Pricing Cards */}
      <div className={styles.pricingCards}>
        <div className={styles.card}>
        
          <h3>Free</h3>
          <p className={styles.Cpara}>Best plan for start-up business</p>
             <div className={styles.price}>
            ${pricingData[billingCycle].free}
          </div>
          <ul>
            <li><FaCheckCircle className={styles.greenIcon} /> 3 Days Trial</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Limited Features</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Unlimited Invoice & Tickets / Month</li>
            <li><FaCheckCircle className={styles.greenIcon} /> One User Account</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Reports</li>
            <li><FaCheckCircle className={styles.greenIcon} /> FAQs Jobs</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Purchase Order</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Customer Portal</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Lead</li>
          </ul>
        <a href="/stocklyhubdev/signup"> <button className={styles.signupButton}>Sign up</button></a>
        </div>
    
        <div className={styles.card}>
          <h3>Basic</h3>
          <p className={styles.Cpara}>Best plan for start-up business</p>
             <div className={styles.price}>
            <span className={styles.originalPrice}>${originalPrices[billingCycle].basic}</span>
            ${pricingData[billingCycle].basic}
          </div>
          <ul>
            <li><FaCheckCircle className={styles.greenIcon} /> 3 Days Trial</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Limited Features</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Unlimited Invoice & Tickets / Month</li>
            <li><FaCheckCircle className={styles.greenIcon} /> One User Account</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Reports</li>
            <li><FaCheckCircle className={styles.greenIcon} /> FAQs Jobs</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Purchase Order</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Customer Portal</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Lead</li>
          </ul>
          <a href="/stocklyhubdev/signup"><button className={styles.signupButton}>Sign up</button></a>
        </div>

        <div className={`${styles.card} ${styles.standard}`}>
          <h3>Standard</h3>
          <p>For users who want to do more</p>
          <div className={styles.price}>
            <span className={styles.originalPrice}>${originalPrices[billingCycle].standard}</span>
            ${pricingData[billingCycle].standard}
          </div>
          <ul>
            <li><FaCheckCircle className={styles.whiteIcon} /> Best Plan for New business</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> One location</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Unlimited Features</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Unlimited Invoice & Tickets / Month</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> 10 User Account</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Reports</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Email</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Estimates</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Field Jobs</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Purchase Order</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Customer Portal</li>
            <li><FaCheckCircle className={styles.whiteIcon} /> Lead</li>
          </ul>
         <a href="/stocklyhubdev/signup"> <button className={styles.upgradeButton}>Upgrade Now</button></a>
          <p className={styles.para}>Try 1 mouth Trail for Free</p>
        </div>
{/*  */}
        <div className={styles.card}>
          <h3>Premium</h3>
          <p>Best plan for Professional business</p>
          <div className={styles.price}>
            <span className={styles.originalPrice}>${originalPrices[billingCycle].premium}</span>
            ${pricingData[billingCycle].premium}
          </div>
          <ul>
            <li><FaCheckCircle className={styles.greenIcon} /> Best Plan for big or small</li>
            <li><FaCheckCircle className={styles.greenIcon} /> 2 locations</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Full Features</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Unlimited Invoice & Tickets / Month</li>
            <li><FaCheckCircle className={styles.greenIcon} /> 10 User Account</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Reports</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Email</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Estimates</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Field Jobs</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Purchase Order</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Customer Portal</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Lead</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Job Timer</li>
            <li><FaCheckCircle className={styles.greenIcon} /> Cash Register</li>
          </ul>
          <a href="/stocklyhubdev/signup"><button className={styles.upgradeButton}>Upgrade Now</button></a>
        </div>
      </div>
    </div>
    {/*  */}
    <div className={styles.faMain}>
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
    {/*  */}
    <Help/>
    <Footer/>
    </>
  );
};

export default PricingSection;
