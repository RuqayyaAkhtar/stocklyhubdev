'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../images/logo22.png'; // Adjust path as per your setup
import styles from '../page.module.css';
import '../globals.css';
import { GoArrowUpRight } from "react-icons/go";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/stocklyhubdev">
          <Image className={styles.logoImage} src={logo} alt="Logo" priority />
        </a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/stocklyhubdev/industries">Industries</a></li>
          <li><a href="/stocklyhubdev/features">Features</a></li>
          <li><a href="/stocklyhubdev/integration">Integrations</a></li>
          <li><a href="/stocklyhubdev/pricing">Pricing</a></li>
          <li className="hideItem"><a href="/stocklyhubdev/contacts">Contact Us</a></li>
          <li className="hideItem"><a href="/stocklyhubdev/login">Login</a></li>
        </ul>
      </nav>

      <div className={styles.btnMainBar}>
        <div className={styles.searchDiv} onClick={toggleSearch}>
          <CiSearch className={styles.searchicon} />
        </div>

        <button className={styles.demoBtn}>
          <a href="/stocklyhubdev/bookDemo" className={styles.bookDemoA}>Free Demo <GoArrowUpRight className={styles.demoA} /></a>
        </button>
        <a className={styles.menuLi}><CiMenuBurger className={styles.menuIcon} onClick={toggleMenu} /></a>

        {menuOpen && (
          <div className={styles.pwrBurger}>
            <span>
              <div className={styles.crossDiv}>
                <button onClick={toggleMenu} className={styles.crossButton}>
                  <VscChromeClose className={styles.crossIcone} />
                </button>
              </div>
              <ul className={styles.menuList}>
                <li><a href="/stocklyhubdev">Home</a></li>
                <li><a href="/stocklyhubdev/industries">Industries</a></li>
                <li><a href="/stocklyhubdev/features">Features</a></li>
                <li><a href="/stocklyhubdev/integration">Integrations</a></li>
                <li><a href="/stocklyhubdev/pricing">Pricing</a></li>
                <li><a href="/stocklyhubdev/contacts">Contact Us</a></li>
                <li><a href="/stocklyhubdev/login">Login</a></li>
                <li><a href="/stocklyhubdev/blogs">Blogs</a></li>
                <li><a href="/stocklyhubdev/faqs">Faqs</a></li>
                <li>
                <button className={styles.demoBtn2}>
                <a href="/stocklyhubdev/bookDemo" className={styles.text_light}>Free Demo</a>
              </button>
                </li>
              </ul>

            </span>
          </div>
        )}

        {searchOpen && (
          <div className={styles.searchPopup}>
            <div className={styles.searchPopupContent}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <button onClick={toggleSearch} className={styles.closeSearchBtn}>
                <VscChromeClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
