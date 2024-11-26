'use client';
import "../globals.css";
import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../images/Frame 1.png";

import { CiMail } from "react-icons/ci";
import { PiLockKeyThin } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import slideImg3 from "../images/Group 1171277992 (4).png";



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slideImg3, slideImg3, slideImg3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval); 
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main>
      <div className={styles["login-main"]}>
        {/* Left Section*/}
        <div className={styles["log-right"]}>
          <div className={styles["log-logo"]}>
            <Link href="/stocklyhubdev">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
          <h1>Welcome back!</h1>
          <p>Log in to Your Account</p>
          <form className={styles["login-form"]}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputMain}>
            <CiMail className={styles.inputIcon} />
            <input id="email" type="email" placeholder="Email" />
            </div>
            <label htmlFor="password">Password</label>
            <div className={styles.inputMain}>
              <div className={styles.passMain}>
            <PiLockKeyThin  className={styles.inputIcon}/>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
              </div>
            <PiEyeLight className={`${styles.eyeIcon} ${showPassword ? styles.active : ''}`}   onClick={() => setShowPassword(!showPassword)}  />
            </div>
            <div className={styles["radi-inp"]}>
                <div className={styles.remember}>
              <input
                type="checkbox"
                id="radio"
                className={styles.radioo}
              />
              <span>Remember me</span>
             </div>
              <Link href="#" className={styles.forgot}>Forgot Password</Link>
            </div>
            <button type="submit" className={styles["submit"]}>Login</button>
            <p className={styles["signup-p"]}>
              Don't have an account? <Link href="/signup">Sign up</Link>
            </p>
          </form>
        </div>
        {/*  */}
        
        <div className={styles["log-left"]}>
          <div className={styles["log-slide"]} style={{ marginLeft: `-${currentSlide * 100}%` }}>
            {slides.map((slide, index) => (
              <div className={styles["l-slides"]} key={index}>
                <div className={styles["log-img-main"]}>
                  <Image src={slide} alt={`Slide ${index + 1}`} width={400} height={300} />
                </div>
                <div className={styles.slidText}>
            <h5>All-In-One Repair Store Management software</h5>
            <p>Track Repair Jobs, Mobile Devices, Customers, Inventory and more</p>
          </div>
              </div>
            ))}
          </div>
          
          <div className={styles["dots"]}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
