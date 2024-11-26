'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import '../globals.css';
import styles from '../page.module.css';
import Image from 'next/image';
import footerlogo from '../images/Group 1171277301.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection1}>
            <div className={styles.logo}>
              <a href="/stocklyhubdev">
                <Image
                  src={footerlogo}
                  className={styles.logo_im_n}
                  alt="Footer Logo"
                  width={600}
                  height={400}
                />
              </a>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className={styles.contact}>
              <p><FaPhoneAlt /> +92 (302)-1234567</p>
              <p><FaEnvelope /> stocklyhub@gmail.com</p>
            </div>
            <p className={styles.copyright}>© 2024 StocklyHub. All rights reserved</p>
          </div>
          <div className={styles.footer_sec}>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Product</h3>
              <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Solution</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Integrations</h3>
              <ul>
                <li>Retail</li>
                <li>Repair</li>
                <li>Recycle</li>
                <li>Wholesale</li>
                <li>BuyBack</li>
                <li>Trade-in</li>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Resources</h3>
              <ul>
                <li><a href="/stocklyhubdev/blogs">Blogs</a></li>
                <li>Newsletter</li>
                <li><a href="/stocklyhubdev/faqs">FAQs</a></li>
                <li>Help center</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.subscribeSection}>
            <p>News & Update</p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Your Email Address" />
              {/* <button>Subscribe</button> */}
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.wts}><FaWhatsapp /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        <div className={styles.footerBottom2}>
          <div className={styles.termss}>
            <a href="/stocklyhubdev/privacy-policy" >Privacy & Policy</a>
            <a href="/stocklyhubdev/GDPR">GDPR</a>
            <a href="/stocklyhubdev/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
