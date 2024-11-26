'use client'
import { useParams } from "next/navigation";
import styles from "./BlogDetail.module.css";
import blogData from "../data"; // Assuming this is the correct import for your blog data.
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";


export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <section className={styles.banner}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.subtitle}>{blog.description2}</p>
          <p className={styles.subTitle}>
            {blog.moreInfo}
          </p>
          <div className={styles.searchContainer}>
            <span>Share it:</span>
            {[<GrFacebookOption />, <RiTwitterXFill />, <FaLinkedinIn />, <FaPinterestP />, <RxCopy />,].map((icons, index) => (
              <div key={index} className={styles.linkItem}>
                {icons}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={blog.bannerImage} alt="FAQ Overview" className={styles.faqImage} />
        </div>
      </section>
      {/*  */}

      {/* Table of Contents and Feedback */}
      <section className={styles.tableOfContentSection}>
        <div className={styles.contentContainer}>
          {/* Table of Contents */}
          <div className={styles.tableOfContent}>
            <h3>Table of Contents</h3>
            <ul>
              {blog.tableOfContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Feedback */}
          <div className={styles.feedback}>
            <h2>Feedback</h2>
            <p>How easy was it to use our software? Did you face any problem tell us!</p>
            <button className={styles.button}>Let us know</button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className={styles.contentSectionMain}>
        {blog.contentSections.map((section, index) => (
          <section key={index} className={`${styles.contentSection} ${styles[section.layout]}`}>
            {section.layout !== "image-left" && (
              <>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </>
            )}

            {/* Conditional Layouts */}
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
      {/* Author Section */}
      <section className={styles.authorSection}>
        <div className={styles.authorDetails}>
          <div className={styles.topSection}>
            <div className={styles.imageMainA}>
              <Image src={blog.author.image} alt={blog.author.name} width={50} height={50} />
            </div>
            <div>
              <h3>{blog.author.name}</h3>
              <p>{blog.author.lastUpdata}</p>
            </div>
          </div>
          <div className={styles.authorB}>
            <h3>About Author</h3>
            <p>{blog.author.bio}</p>
            <div className={styles.searchContainer}>
              {[<GrFacebookOption />, <RiTwitterXFill />, <FaLinkedinIn />, <FaPinterestP />,].map((icons, index) => (
                <div key={index} className={styles.linkItem}>
                  {icons}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.feedbackForm}>
          <h3>Is this tool helpful?</h3>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="helpful" value="yes" className={styles.radioInput} />
              Yes
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="helpful" value="no" className={styles.radioInput} />
              No
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="helpful" value="maybe" className={styles.radioInput} />
              Maybe
            </label>
          </div>
          <form action="">
            <input type="email" name="email" id="feedbackMail" placeholder="Enter your email to get response" />
            <textarea  rows={20} placeholder="Suggest us tool & how can we improve it?" className={styles.textarea}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>



      {/*  */}
      <section className={styles.relatedBlogsSection}>
        <h2 className={styles.relatedBlogsHeading}>Related Blogs</h2>
        <div className={styles.blogContainer}>
          {blogData.slice(0, 4).map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className={styles.blogCard}>
              <div className={styles.Imagecontainer}>
                <Image src={blog.bannerImage} alt={blog.title} className={styles.blogImage} />
              </div>
              <div className={styles.blogContent}>
                <h3 className={styles.cardtitle}>{blog.title}</h3>
                <p className={styles.carddescription}>{blog.description}</p>
                <p className={styles.authorP}>{blog.moreInfo}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
