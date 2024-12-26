"use client";
import React from 'react';
import styles from "./BlogDetail.module.css";
import blogData from "../data";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";

const jsx = ({ blog }) => {
  return (
    <div>
        <Header />
      <div className={styles.containerMain}>
      <section className={styles.banner}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.subtitle}>{blog.description2}</p>
          <p className={styles.subTitle}>{blog.moreInfo}</p>
          <div className={styles.searchContainer}>
            <span>Share it:</span>
            {[GrFacebookOption, RiTwitterXFill, FaLinkedinIn, FaPinterestP, RxCopy].map((Icon, index) => (
              <div key={index} className={styles.linkItem}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blog.bannerImage}
            alt={blog.title}
            className={styles.faqImage}
            layout="responsive"
            width={800}
            height={400}
          />
        </div>
      </section>
</div>

      <section className={styles.tableOfContentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.tableOfContent}>
            <h3>Table of Contents</h3>
            <ul>
              {blog.tableOfContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.feedback}>
            <h2>Feedback</h2>
            <p>How easy was it to use our software? Did you face any problem tell us!</p>
            <button className={styles.button}>Let us know</button>
          </div>
        </div>
      </section>

      <div className={styles.contentSectionMain}>
        {blog.contentSections.map((section, index) => (
          <section key={index} className={`${styles.contentSection} ${styles[section.layout]}`}>
            {section.layout !== "image-left" && (
              <>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </>
            )}
            {section.layout === "images-row" && (
              <div className={styles.imagesRow}>
                {section.images.map((image, idx) => (
                  <Image key={idx} src={image} alt={`Section ${index + 1} Image`} width={300} height={400} />
                ))}
              </div>
            )}
            {section.layout === "image-left" && (
              <div className={styles.imageLeft}>
                <div className={styles.image}>
                  <Image src={section.images[0]} alt={`Section ${index + 1} Image`} width={250} height={250} />
                </div>
                <div className={styles.text}>
                  <h2>{section.heading}</h2>
                  <p>{section.content}</p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      <section className={styles.authorSection}>
        <div className={styles.authorDetails}>
          <div className={styles.topSection}>
            <div className={styles.imageMainA}>
              <Image src={blog.author.image} alt={blog.author.name} width={50} height={50} />
            </div>
            <div>
              <h3>{blog.author.name}</h3>
              <p>{blog.author.lastUpdate}</p>
            </div>
          </div>
          <div className={styles.authorB}>
            <h3>About Author</h3>
            <p>{blog.author.bio}</p>
            <div className={styles.searchContainer}>
              {[GrFacebookOption, RiTwitterXFill, FaLinkedinIn, FaPinterestP].map((Icon, index) => (
                <div key={index} className={styles.linkItem}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.feedbackForm}>
          <h3>Is this tool helpful?</h3>
          <div className={styles.radioGroup}>
            {["yes", "no", "maybe"].map((value) => (
              <label key={value} className={styles.radioLabel}>
                <input type="radio" name="helpful" value={value} className={styles.radioInput} />
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </label>
            ))}
          </div>
          <form>
            <input
              type="email"
              name="email"
              id="feedbackMail"
              placeholder="Enter your email to get response"
            />
            <textarea
              rows={20}
              placeholder="Suggest us tool & how can we improve it?"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitt}>Submit</button>
          </form>
        </div>
      </section>

      <section className={styles.relatedBlogsSection}>
        <h2 className={styles.relatedBlogsHeading}>Related Blogs</h2>
        <div className={styles.blogContainer}>
          {blogData.slice(0, 4).map((relatedBlog) => (
            <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`} className={styles.blogCard}>
              <div className={styles.Imagecontainer}>
                <Image
                  src={relatedBlog.bannerImage}
                  alt={relatedBlog.title}
                  className={styles.blogImage}
                  layout="responsive"
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.blogContent}>
                <h3 className={styles.cardtitle}>{relatedBlog.title}</h3>
                <p className={styles.carddescription}>{relatedBlog.description}</p>
                <p className={styles.authorP}>{relatedBlog.moreInfo}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default jsx;
