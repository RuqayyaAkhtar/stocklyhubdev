'use client'
import Header from "../header/page";
import styles from "./signup.module.css";
import { useState } from "react";
import { PiEyeLight } from "react-icons/pi";


const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Header/>
    <div className={styles.signupPage}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h2 className={styles.sectionHeading}>Personal Info</h2>
        <div className={styles.formGroup}>
          <div className={styles.halfWidth}>
            <label htmlFor="fullName" className={styles.inputLabel}>Full Name</label>
            <input id="fullName" type="text" placeholder="Your Name" className={styles.inputField} />
          </div>
          <div className={styles.halfWidth}>
            <label htmlFor="businessName" className={styles.inputLabel}>Business Name</label>
            <input id="businessName" type="text" placeholder="Business Name" className={styles.inputField} />
          </div>
        </div>
        <label htmlFor="address" className={styles.inputLabel}>Address</label>
        <input id="address" type="text" placeholder="Your Address" className={styles.inputField} />
        <div className={styles.formGroup}>
          <div className={styles.halfWidth}>
            <label htmlFor="city" className={styles.inputLabel}>City | Town</label>
            <input id="city" type="text" placeholder="City | Town" className={styles.inputField} />
          </div>
          <div className={styles.halfWidth}>
            <label htmlFor="state" className={styles.inputLabel}>State | County</label>
            <input id="state" type="text" placeholder="State | County" className={styles.inputField} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.halfWidth}>
            <label htmlFor="country" className={styles.inputLabel}>Country</label>
            <input id="country" type="text" placeholder="Country" className={styles.inputField} />
          </div>
          <div className={styles.halfWidth}>
            <label htmlFor="zipcode" className={styles.inputLabel}>Zipcode | Post Code</label>
            <input id="zipcode" type="text" placeholder="Zipcode | Post Code" className={styles.inputField} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.halfWidth}>
            <label htmlFor="phone" className={styles.inputLabel}>Phone no</label>
            <input id="phone" type="text" placeholder="Phone no" className={styles.inputField} />
          </div>
          <div className={styles.halfWidth}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input id="email" type="email" placeholder="Your Email" className={styles.inputField} />
          </div>
        </div>
        <label htmlFor="website" className={styles.inputLabel}>Website</label>
        <input id="website" type="url" placeholder="Your Website" className={styles.inputField} />
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.borderedSection}>
          <h2 className={styles.sectionHeading}>Select Business Type</h2>
          <div className={styles.checkboxGroup}>
            {["Retail", "Recycle", "Repair", "Wholesale", "Trade-in", "BuyBack"].map((type) => (
              <label key={type}>
                <input type="checkbox" className={styles.radioo} /> {type}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.borderedSection}>
          <h2 className={styles.sectionHeading}>Select Product Type</h2>
          <div className={styles.checkboxGroup}>
            {[ "Mobile Phone", "Smartwatch", "Laptops", "Spare Parts", "Drones", "Accessories", "Computer", "Tablets", "Others" ].map((type) => (
              <label key={type}>
                <input type="checkbox" className={styles.radioo} /> {type}
              </label>
            ))}
          </div>
          <label htmlFor="others" className={`${styles.inputLabel} ${styles.inputLabel1}`}>Describe Others</label>
          <input id="others" type="text" placeholder="Describe Others" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.halfWidth}>
            <label htmlFor="username" className={styles.inputLabel}>Select Username</label>
            <input id="username" type="text" placeholder="@username" className={styles.inputField} />
          </div>
          <div className={styles.halfWidth}>
            <label htmlFor="password" className={styles.inputLabel}>Password</label>
            <div className={styles.passwordInput}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.inputField} // Use the same class for consistency
              />
              <PiEyeLight className={`${styles.eyeIcon} ${showPassword ? styles.active : ''}`}   onClick={() => setShowPassword(!showPassword)}  />
            </div>
          </div>
        </div>
        <div className={styles.terms}>
          <label>
            <input type="checkbox" className={styles.radioo}/> Accept the Terms & Conditions!{" "}
            <a href="#terms">Learn More*</a>
          </label>
          <label>
            <input type="checkbox" className={styles.radioo} /> Lorem ipsum Email notification.{" "}
            <a href="#email">Learn More*</a>
          </label>
        </div>
        <div className={styles.buttons}>
          <a href="/bookDemo"><button className={styles.request}>Request Demo</button></a>
            <button>Submit</button>
        </div>
        <div className={styles.loginLink}>
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignupForm;
