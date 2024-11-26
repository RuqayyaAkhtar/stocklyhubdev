'use client';
import React from 'react';
import styles from './blog.module.css';
import Image from 'next/image';
import faqImage from '../images/image (10).png'; 
import Header from '../header/page';
import Footer from '../footer/page';
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import Link from "next/link";
import blogData from "./data";
import TestimonialSlider from '../home/testimonial';
// import { useBlogContext } from '../context/BlogContext';
// import { useBlogContext } from '../../context/BlogContext';

const Blogs = () => {

  return (
    <>
      <Header />
      <section className={styles.banner}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>4 ways to diversify your income stream as a freelancer or agency</h1>
          <p className={styles.subtitle}>
            The integral calculator, your go-to tool for solving integrals online. Whether it’s an indefinite or definite integrals, use it to get quick results The integral calculator, your go-to tool for solving integrals online. Whether it’s an indefinite or definite integrals, use it to get quick results.
          </p>
          <p className={styles.subTitle}>
            Johan Wick 12 September, 2024
          </p>
          <div className={styles.searchContainer}>
            <span>Share it:</span>
            {[<GrFacebookOption />,<RiTwitterXFill />,<FaLinkedinIn />,<FaPinterestP />,<RxCopy />, ].map((icons, index) => (
              <div key={index} className={styles.linkItem}>
                 {icons}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={faqImage} alt="FAQ Overview" className={styles.faqImage} />
        </div>
      </section>
      {/* section2 */}
  
    <section className={styles.blogSection}>
      {/* <div className={styles.blogContainer}>
        {blogData.map((blog) => (
      
          <div key={blog.id} className={styles.blogCard}>
              <div className={styles.Imagecontainer}>
          <Image src={blog.bannerImage} alt={blog.title} className={styles.blogImage}  
          />
          </div>
            <div className={styles.blogContent}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <p className={styles.authorP}>{blog.moreInfo}</p>
            
            </div>
          </div>
        
        ))}
      </div> */}
     <div className={styles.blogContainer}>
  {blogData.map((blog) => (
    <Link key={blog.id} href={`/blogs/${blog.id}`} className={styles.blogCard}>
      <div className={styles.Imagecontainer}>
        <Image src={blog.bannerImage} alt={blog.title} className={styles.blogImage} />
      </div>
      <div className={styles.blogContent}>
        <h4 className={styles.cardtitle}>{blog.title}</h4>
        <p className={styles.carddescription}>{blog.description}</p>
        <p className={styles.authorP}>{blog.moreInfo}</p>
      </div>
    </Link>
  ))}
</div>

    </section>
<TestimonialSlider/>
      <Footer />
    </>
  );
};

export default Blogs;