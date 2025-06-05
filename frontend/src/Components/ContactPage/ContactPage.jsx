import React from "react";
import "./ContactPage.css";
import contactme from "../../assets/contactme.png";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import leetcode from "../../assets/leetcode.png";
const ContactPage = () => {
  return (
    <div className="full-page" id="contact">
      <div className="main">
        <div className="left-div">
        <div className="social-icon-div">
          <a href="https://www.linkedin.com/in/adityakumar0702/">
            <img src={linkdin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Aditya07024">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://leetcode.com/u/adityakumar07024/">
            <img src={leetcode} alt="LeetCode" />
          </a>
          <a href="https://x.com/Aditya07024">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/aditya_chaudhary_._/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className="contact-div">
          <h1>Let's Connect</h1>
          <p>I’m open to collaborations and projects.</p>
          <a href="https://api.whatsapp.com/send?phone=8650970092"><h2>+91 8650970092</h2></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsdLDtzjNQnGhcwGNvstjWnWCHTdqhjrQhDGFXlmQwkgnlzMKCvbJJtqrfXJXwmxKTKNB">adityakumar07024@gmail.com</a>
        </div>
        <div className="address-div"></div>
      </div>
      <div className="right-div">
        <img src={contactme} alt=""></img>
      </div>
      </div>
      <hr></hr>
      <div className="footer"><p>© 2025 Aditya Kumar. All Rights Reserved.</p></div>
    </div>
  );
};

export default ContactPage;
