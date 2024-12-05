'use client'
import React from 'react';
import styles from './demo.module.css'
import Header from '../header/page';
import Footer from '../footer/page';
import Image from 'next/image';
import framImage from '../images/image 11 (2).png' 
import faqImage from '../images/Group 1171278110.png' 
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";

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
  }
];


const page = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <>
      <Header/>
      <section className={styles.banner}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Meeting with a Stocklyhub Product Specialist (Global Team)</h1>
          <p className={styles.subtitle}>
          Join us for 30 minutes discovery call to explore your business needs and help us tailor a personalized walkthrough of StocklyHub just fot you. We’ll reach out to you at the phone number yo privide
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={faqImage} alt="FAQ Overview" className={styles.faqImage} />
        </div>
      </section>
      {/* section */}

      <div className={`${styles.container} ${styles.faqmain}`}>
      <div className={`${styles.leftSection} ${styles.textContainer2}`}>
      <div className={styles.framImage}>
    <Image src={framImage} alt="side image" className={styles.faqsImage} />
    </div>
        <div className={styles.chat}>
          <h3>Chat with us</h3>
          <p>Speak to our Friendly team via live chat.</p>
          <ul>
            <li><a href="#"><IoChatbubbleOutline className={styles.icons} />Start a live chat</a></li>
            <li><a href="#"><CiMail className={styles.icons} />Shoot us an email</a></li>
            <li><a href="#"><FaWhatsapp className={styles.icons} />Message on WhatsApp</a></li>
          </ul>
        </div>
        <div className={styles.call}>
          <h3>Call us</h3>
          <p>Speak to our Friendly team via live Call.</p>
          <p><a href="#"><LuPhoneCall className={styles.icons} />+92 000 101000101</a></p>
          <p><a href="#"><LuPhoneCall className={styles.icons} /> +92 000 101000001</a></p>
        </div>
        <div className={styles.address}>
          <h3>Call us</h3>
          <p>Speak to our Friendly team via live Call.</p>
          <p className={styles.location}><IoLocationOutline className={styles.icons} />Hall Road, Jinnah town Lahore, PK</p>
        </div>
      </div>

      <div className={`${styles.rightSection} ${styles.imageContainer2}`}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.label}>
              Full Name
              <input type="text" placeholder="Full Name" className={styles.input} />
            </label>
            <label className={styles.label}>
              Business Name
              <input type="text" placeholder="Business Name" className={styles.input} />
            </label>
          </div>
          <div className={styles.row}>
          <label className={styles.label}>
              Email
              <input type='email' placeholder="your@company.com" className={styles.input} />
            </label>
            <label className={styles.label}>
              Phone Number
              <div className={styles.phoneContainer}>
                <select className={styles.countryCode}>
                  <option value="PK">PK +92</option>
                  <option value="PK">UK +44</option>
                  
                </select>
                <input type="text" placeholder="92 000 0000000" className={styles.phoneInput} />
              </div>
            </label>
          </div>
          <div className={styles.row}>
          <label className={styles.label}>
              Website
              <input type="text" placeholder="www.yourwebsite.com" className={styles.input} />
            </label>
            <div className={styles.dateTimePickerContainer}>
      <label className={styles.label}>Select Date and Time</label>
      <div className={styles.inputContainer}>
        <FaRegCalendarAlt className={styles.icon} />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="dd MMMM, yyyy h:mm aa"
          placeholderText="Select date and time"
          className={styles.dateInput}
        />
      </div>
    </div>
          
          </div>
          {/* business type */}
            <h4 className={styles.h4}>Select Business Type</h4>
          <div className={styles.businessType}>
            <label><input type="checkbox" className={styles.radioo}/> Retail</label>
            <label><input type="checkbox" className={styles.radioo}/> Wholesale</label>
            <label><input type="checkbox" className={styles.radioo}/> Recycle</label>
            <label><input type="checkbox" className={styles.radioo}/> Repair</label>
            <label><input type="checkbox" className={styles.radioo}/> Trade-in</label>
            <label><input type="checkbox" className={styles.radioo}/> BuyBack</label>
          </div>
          {/* product type */}
          <h3 className={styles.h3}>Select Product Type</h3>
          <div className={styles.businessType}>
            <label><input type="checkbox" className={styles.radioo}/> Mobile Phone</label>
            <label><input type="checkbox" className={styles.radioo}/> Smartwatch</label>
            <label><input type="checkbox" className={styles.radioo}/> Laptops</label>
            <label><input type="checkbox" className={styles.radioo}/> Computer</label>
            <label><input type="checkbox" className={styles.radioo}/> Tablets</label>
            <label><input type="checkbox" className={styles.radioo}/> Spare Parts</label>
            <label><input type="checkbox" className={styles.radioo}/> Drones</label>
            <label><input type="checkbox" className={styles.radioo}/> Accessories</label>
            <label><input type="checkbox" className={styles.radioo}/> Macbook</label>
            <label><input type="checkbox" className={styles.radioo}/> Gaming Consoles</label>
            <label><input type="checkbox" className={styles.radioo}/> Others</label>
          </div>
          <button type="submit" className={styles.submitButton}>Book Demo</button>
        </form>
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
    {/*  */}
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
}

export default page;