import React from 'react';
import styles from './contact.module.css'
import Header from '../header/page';
import Footer from '../footer/page';
import Image from 'next/image';
import framImage from '../images/image 11 (2).png' 
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";


const page = () => {
  return (
    <>
      <Header/>
      <div className={styles.containerMain}>
      <div className={styles.contactBanner}>
       <h1>Contact Our Team</h1>
       <p>Got any questions about the product or scaling on our platform? We’re here to help. Chat to pur friendly team 24/7 and get onboard in less than 5 minutes</p>
      </div>
      </div>
      {/*  */}
      <div className={`${styles.container} ${styles.faqmain}`}>
      <div className={`${styles.leftSection} ${styles.textContainer} ${styles.textContainer2}`}>
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

      <div className={`${styles.rightSection} ${styles.imageContainer} ${styles.imageContainer2}`}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.label}>
              First Name
              <input type="text" placeholder="First Name" className={styles.input} />
            </label>
            <label className={styles.label}>
              Last Name
              <input type="text" placeholder="Last Name" className={styles.input} />
            </label>
          </div>
          <label className={styles.labelFullWidth}>
            Email
            <input type="email" placeholder="your@company.com" className={styles.fullWidthInput} />
          </label>
          <div className={styles.row}>
            <label className={styles.label}>
              Phone Number
              <div className={styles.phoneContainer}>
                <select className={styles.countryCode}>
                  <option value="PK">PK +92</option>
                  <option value="PK">UK +44</option>
                  {/* Add more country options here */}
                </select>
                <input type="text" placeholder="92 000 0000000" className={styles.phoneInput} />
              </div>
            </label>
            <label className={styles.label}>
              Website
              <input type="text" placeholder="www.yourwebsite.com" className={styles.input} />
            </label>
          </div>
          <label className={styles.labelFullWidth}>
            Message
            <textarea  rows={10} placeholder="Leave a Message here" className={styles.textarea}></textarea>
          </label>
          <h4 style={{fontWeight:'500'}}>Select Business Type</h4>
          <div className={styles.businessType}>
            <label><input type="checkbox" className={styles.radioo} /> Retail</label>
            <label><input type="checkbox" className={styles.radioo} /> Wholesale</label>
            <label><input type="checkbox" className={styles.radioo} /> Recycle</label>
            <label><input type="checkbox" className={styles.radioo} /> Repair</label>
            <label><input type="checkbox" className={styles.radioo} /> Trade-in</label>
            <label><input type="checkbox" className={styles.radioo} /> BuyBack</label>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
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